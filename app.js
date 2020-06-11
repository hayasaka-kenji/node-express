const { SESSION_SECRET } = require('./config/app.config').security;
const accesslogger = require('./lib/log/accesslogger');
const systemlogger = require('./lib/log/systemlogger');
const accountcontrol = require('./lib/security/accountcontrol');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');
const app = express();

app.set('view engine', 'ejs');
app.disable('x-powerd-by');

app.use('/public',
  express.static(__dirname + '/public/' +
    (process.env.NODE_ENV === 'development' ? 'development' : 'production'))
);

app.use(accesslogger());

app.use(cookieParser());
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  name: 'sid'
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(flash());
app.use(...accountcontrol.initialize()); // 分割代入

// Route
app.use('/api', (() => {
  const router = express.Router();
  router.use('/posts', require('./api/posts'));
  return router;
})());

app.use('/', (() => {
  const router = express.Router();
  router.use((req, res, next)=>{
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    next();
  });
  router.use('/posts/', require('./routes/posts'));
  router.use('/search/', require('./routes/search'));
  router.use('/account/', require('./routes/account'));
  router.use('/', require('./routes/index'));
  return router;
})());

app.use(systemlogger());

app.listen(3000);