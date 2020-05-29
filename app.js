const accesslogger = require('./lib/log/accesslogger');
const systemlogger = require('./lib/log/systemlogger');
const express = require('express');
const app = express();


app.set('view engine', 'ejs');
app.disable('x-powerd-by');

app.use('/public',
  express.static(__dirname + '/public/' +
    (process.env.NODE_ENV === 'development' ? 'development' : 'production'))
);

app.use(accesslogger());

// Route
app.use('/', require('./routes/index'));
app.use('/posts/', require('./routes/posts'));
app.use('/search/', require('./routes/search'));
app.use('/account/', require('./routes/account'));

app.use(systemlogger());

app.listen(3000);