const express = require('express');
const app = express();

app.use(require('./lib/logger'));

app.get('/',(req, res) => {
  res.status(200).send('helloworld')
})

app.listen(3000);