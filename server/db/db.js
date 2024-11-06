const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: `postgres`, // Your RDS master username
  host: `database-1.cxkmwqko4ku9.us-east-2.rds.amazonaws.com`, // Your RDS endpoint
  database: `database-1`, // The database name, e.g., "database-1"
  password: `secret123!`, // The RDS master password
  port: 5432, // RDS port, usually 5432
  ssl: { rejectUnauthorized: false },
});

// Function to initialize the database with required tables and seed data
const initializeDatabase = async () => {
  try {
    // Create the questions table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS questions (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        difficulty VARCHAR(10) CHECK (difficulty IN ('easy', 'medium', 'hard'))
      );
    `);

    // Create the questionDetails table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS questionDetails (
        id SERIAL PRIMARY KEY,
        question_id INT REFERENCES questions(id) ON DELETE CASCADE,
        description TEXT,
        example TEXT,
        functional_requirements TEXT,
        nonfunctional_requirements TEXT,
        assumptions TEXT,
        estimated_usages TEXT,
        solution VARCHAR(255) -- URL to solution PDF or any related document
      );
    `);

    // Seed the questions table if empty
    const questionResult = await pool.query('SELECT COUNT(*) FROM questions');
    if (parseInt(questionResult.rows[0].count) === 0) {
      const questionInsertResult = await pool.query(
        `INSERT INTO questions (title, difficulty) VALUES ($1, $2) RETURNING id`,
        ['Tiny URL', 'easy']
      );
      const questionId = questionInsertResult.rows[0].id;
      console.log(
        'Seed question inserted in questions table with id:',
        questionId
      );

      // Insert detailed information into questionDetails table
      await pool.query(
        `INSERT INTO questionDetails (question_id, description, example, functional_requirements, nonfunctional_requirements, assumptions, estimated_usages, solution) 
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
        [
          questionId,
          'Given a URL, design a web API that generates a shorter and unique alias of it.',
          `Example:
          Input (102 characters): https://leetdesign.com/problems/tiny-url?utm_source=leetdesign&utm_medium=social
          Output (28 characters): https://tinyurl.com/5n6et7uf`,
          `Functional Requirements:
          - Given a URL, generate a shorter and unique alias of it.
          - When a user accesses the short link, redirect them to the original URL.`,
          `Nonfunctional Requirements:
          - 99.99% Availability
          - 150ms latency on redirection
          - Links expire at 5 years by default
          - Should perform globally
          - All URLs are public`,
          `Assumptions:
          - Each URL is 500 bytes
          - 20% of URLs can be stored in a cache
          - Cache TTL is 24 hours`,
          `Estimated Usage:
          - 100 Reads per Write
          - 500,000 URLs created every month`,
          `https://drive.google.com/file/d/1hxO95MFtleValnbDRVykg8khLrCU-aEP/view?usp=drive_link`, // Set this to a solution URL if available, otherwise leave it as null
        ]
      );
      console.log('Seed question details inserted in questionDetails table.');
    } else {
      console.log('Questions table already has data.');
    }
  } catch (error) {
    console.error('Error initializing database:', error);
  }
};

// Call the initialize function to create tables and seed data
initializeDatabase();

module.exports = pool;
