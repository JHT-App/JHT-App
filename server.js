const express = require('express');
const path = require('path');
const cors = require('cors');

const PORT = 3000;

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, './index.html'));
});

app.get('/questions', (req, res) => {
  return res.json(res.descriptions);
})

app.get('/answer', (req, res) => {
  return res.json(res.answer);
})

app.get('/question_id', (req, res) => {
  return res.json(res.question);
})

app.get('*', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, './index.html'));
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occured' },
  };
  const errObj = Object.assign({}, defaultErr, err);
  console.log(errObj.log);
  return res.status(errObj.status).json(errObj.message);
});

app.listen(PORT, () => {
  console.log(`serving is running on port: ${PORT}`);
});
