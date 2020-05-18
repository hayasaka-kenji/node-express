const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  console.log(req.get('user-agent'));
  // クラアントにキャッシュさせない
  res.set('cash-control', 'no-cache');
  res.set('Pragma', 'no-cache');
  res.render('./index')
});

app.listen(3000);