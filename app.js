const express = require('express');
const session = require('express-session');
const app = express();

app.set('view engine', 'ejs');
app.use(session({
  secret: 'qwerty', // 暗号化のキー
  resave: false, // 必ず指定する
  saveUninitialized: true,
  name: 'sid'
}));

app.get('/', (req, res) => {
  let count = req.session.count || 0; // セッションに関しては数値が使える
  req.session.count = count + 1;
  res.render('./index', {count});
});

app.listen(3000);