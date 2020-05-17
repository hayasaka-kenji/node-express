const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const data = {
    items: [
      {name: 'Bob'},
      {name: 'John'},
      {name: 'Michael'},
    ]
  }
  res.status(200).render('index.ejs', data)
});


app.listen(3000)