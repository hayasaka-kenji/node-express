const express = require('express');
const app = express();

// すべてものを読み取る
app.all('/', (req, res) => {
  console.log(req.method);
  console.log(req.url);
  console.log(JSON.stringify(req.headers));  // JSONパースする

  // リクエストのオブジェクトがストリーミングになっているので変換する
  // 変数bodyに chunkを溜め込んでendで吐き出す
  let body = '';
  req.on('data', (chunk) => {
    body += chunk;
  });
  req.on('end', () => {
    console.log(body);
  });
  res.send('OK');
})

app.listen(3000)