const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('./index') // .ejsの表記は省略可能
});

// indexからpostで送る。
// debugからreq.bodyで送った値を見ることができる。もしくはreqにカーソルを当てる
app.post('/', (req, res) => {
  res.send('OK')
});

app.listen(3000);