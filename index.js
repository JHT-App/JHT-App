import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './src/App.jsx';
import './src/css/questions.css';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
