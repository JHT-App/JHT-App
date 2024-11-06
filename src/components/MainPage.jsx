import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import '../css/mainPageStyle.css';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import QuestionsTable from './QuestionsTable';
import getAllQuestions from '../api/getAllQuestions';
import bank from '../assets/bank.png';

const MainPage = () => {
  const [questions, setQuestions] = useState(null);
  useEffect(() => {
    const loadData = async () => {
      const result = await getAllQuestions();
      setQuestions(result);
      console.log('result', result);
      console.log('questions', questions);
    };
    loadData();
  }, []);
  return (
    <>
      <Navbar />
      <Container fixed>
        <div className='main-headline'>
          <img src={bank} className='bank-logo' />
          <Typography variant='h2' component='h2'>
            BANK OF SYSTEM DESIGN
          </Typography>
        </div>
        {questions ? <QuestionsTable rows={questions} /> : null}
      </Container>
    </>
  );
};

export default MainPage;
