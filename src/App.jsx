import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './component/Main.jsx';
// import { store } from './store';
// import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme/theme";
import MainPage from "./pages/MainPage";
export default function App() {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}
