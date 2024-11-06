const express = require('express');
const path = require('path');
const pool = require('./db/db');
const cors = require('cors');

const PORT = 3001;
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist')));
app.use(
  cors({
    origin: 'http://localhost:8080',
  })
);

// route to serve the index.html file
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, './index.html'));
});

// route to get all question
app.get('/api/questions', async (req, res, next) => {
  try {
    const result = await pool.query('SELECT * FROM questions');
    res.json(result.rows); // Send all questions as JSON
  } catch (err) {
    console.error('Error fetching questions:', err);
    return next(err);
  }
});

// route to get details of a specific question by ID
app.get('/api/questionDetail/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      'SELECT * FROM questionDetails WHERE question_id = $1',
      [id]
    );
    res.json(result.rows); // Send details as JSON
  } catch (err) {
    console.error('Error fetching question details:', err);
    return next(err);
  }
});

// Catch-all route to serve the index.html file for any other routes
app.get('*', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, './index.html'));
});

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error in global error handler',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errObj = Object.assign({}, defaultErr, err);
  console.log(errObj.log);
  return res.status(errObj.status).json(errObj.message);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
