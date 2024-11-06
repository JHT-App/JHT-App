import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Questions from './components/Questions';
// import { store } from './store';
// import { Provider } from 'react-redux';
import { ThemeProvider } from '@emotion/react';
import theme from './theme/theme';
import MainPage from './components/MainPage';
export default function App() {
  const [questions, setQuestions] = useState([]);
  const [questionDetails, setQuestionDetails] = useState([]);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <MainPage questions={questions} setQuestions={setQuestions} />
            }
          ></Route>
          <Route
            path='/details/1'
            element={
              <Questions
                questionDetails={questionDetails}
                setQuestionDetails={setQuestionDetails}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
