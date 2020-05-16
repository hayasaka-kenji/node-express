const express = require('express');
const app = express();

// app.useに対して作成したミドルウェアを引き渡す
app.use(require('./lib/logger'));

app.get('/', (req, res) => {
  res.status(200).send('hello world');
});

app.listen(3000);