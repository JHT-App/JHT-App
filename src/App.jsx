import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './component/Main.jsx';
// import { store } from './store';
// import { Provider } from 'react-redux';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
