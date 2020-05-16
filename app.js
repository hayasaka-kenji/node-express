const express = require('express');
const app = express(); // webアプリケーションはappとするのが通例

// Nodeコアモジュールを拡張
// getで指定しているのでpostにはアクセスできない
app.get('/', (req, res) => {
  // res.writeHead(200);
  // res.write('hello world');
  // res.end();

  // Expressの書き方に修正
  res.status(200).send('hello world');
});

app.listen(3000);