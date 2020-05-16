const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('hello world');
});

// userの値を表示
app.get('/user/(\\d+)', (req, res) => {
  // reqで受け取る
  res.status(200).send(req.params.id);
  console.log(req.params.id)
});

app.listen(3000);