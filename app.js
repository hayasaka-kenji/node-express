const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(cookieParser()); // ミドルウェアなのでuseが必要

app.get('/', (req, res) => {
  let count = parseInt(req.cookies.count || 0); // 文字列なので数値に変換する。
  res.cookie('count', count + 1);
  res.render('./index', {count});
});

app.listen(3000);