const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// sql
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database : 'NodeTest'
});

con.connect(function(err) {
  if(err) throw err;
  console.log('Connected')
})

app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`)
)

app.get('/', (req, res) => {
  const sql = "select * from users";
  con.query(sql, function(err, result, fields) {
    if(err) throw err;
    res.render('index', {users: result})
  })
})

app.post('/', (req, res) => {
  const sql = "INSERT INTO users SET ?";
  con.query(sql, req.body, function(err, result, fields){
    if (err) throw err;
    console.log(result);
    res.redirect('/');
  })
})

app.get('/create', (req, res) => {
  res.render('form');
})

app.get('/delete/:id', (req, res)=> {
  const sql = "DELETE FROM users WHERE id = ?";
  
  con.query(sql, [req.params.id], function(err, result, fields) {
    if(err) throw err;
    console.log(result);
    res.redirect('/');
  })
})

app.post('/update/:id', (req, res) => {
  const sql = "UPDATE users SET ? WHERE id = " + req.params.id;
  con.query(sql, req.body, function (err, result, fields) {
    if(err) throw err;
    console.log(result);
    res.redirect('/');
  })
})

app.get('/edit/:id', (req, res)=> {
  const sql = "SELECT * FROM users WHERE id = ?";
  con.query(sql, [req.params.id], function(err, result, fields) {
    if(err) throw err;
    res.render('edit', {user: result});
  })
})