import React, { useEffect } from 'react';
import Navbar from './Navbar';
import '../css/mainPageStyle.css';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import QuestionsTable from './QuestionsTable';
import getAllQuestions from '../api/getAllQuestions';
import bank from '../assets/bank.png';

const MainPage = ({ questions, setQuestions }) => {
  useEffect(() => {
    const loadData = async () => {
      const result = await getAllQuestions();
      setQuestions(result);
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
        {questions ? (
          <QuestionsTable rows={questions} setQuestions={setQuestions} />
        ) : null}
      </Container>
    </>
  );
};

export default MainPage;
