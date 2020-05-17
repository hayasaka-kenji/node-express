const express = require('express');
const app = express();

app.set('view engine', 'ejs');

// // pug (views内のpugを指定)
// app.get('/', (req, res) => {
//   res.status(200).render('index.pug', {title: 'Node.js app'})
// });

// ejs
app.get('/', (req, res) => {
  res.status(200).render('index.ejs', {title: 'Node.js app'})
});


app.listen(3000)