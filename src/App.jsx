import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Questions from './components/Questions';
// import { store } from './store';
// import { Provider } from 'react-redux';
import { ThemeProvider } from '@emotion/react';
import theme from './theme/theme';
import MainPage from './components/MainPage';
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />}></Route>
          <Route path='/details/1' element={<Questions />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
