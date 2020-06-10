const { CONNECTION_URL, OPTIONS, DATABASE } = require('../config/mongodb.config');
const { authenticate, authorize } = require('../lib/security/accountcontrol');
const router = require('express').Router();
const MongoClient = require('mongodb').MongoClient;
let tokens = new require('csrf')(); // インスタンスの生成

const validateRegistData = function (body) {
  let isValidated = true, errors = {};

  if (!body.url) {
    isValidated = false;
    errors.url = "No URL has been entered. Please enter the URL that starts with '/'.";
  }

  if (body.url && /^\//.test(body.url) === false) {
    isValidated = false;
    errors.url = "Please enter the URL that starts with '/'.";
  }

  if (!body.title) {
    isValidated = false;
    errors.title = "No Title has been entered.";
  }

  return isValidated ? undefined : errors;
};

// MongoDBに登録するをデータを整形する処理
const createRegistData = function (body) {
  const datetime = new Date();
  return {
    url: body.url,
    published: datetime,
    update: datetime,
    title: body.title,
    content: body.content,
    keywords: (body.keywords || '').split(','), // カンマ区切りでスプリットする
    authors: (body.authors || '').split(',')
  };
};

router.get('/', authorize('readWrite'), (req, res) => {
  res.render('./account/index');
});

router.get('/login', (req, res) => {
  res.render('./account/login', {message: req.flash('message')});
});

router.post('/login', authenticate());

router.post('/logout', (req,res) => {
  req.logOut();
  res.redirect('/account/login');
});


router.get('/posts/regist', authorize('readWrite'), (req, res) => {
  tokens.secret((error, secret) => {
    const token = tokens.create(secret);
    req.session._csrf = secret;
    res.cookie('_csrf', token);
    res.render('./account/posts/regist-form');
  });
});

router.post('/posts/regist/input', authorize('readWrite'), (req, res) => {
  const original = createRegistData(req.body);
  res.render('./account/posts/regist-form', { original });
});

router.post('/posts/regist/confirm', authorize('readWrite'), (req, res) => {
  const original = createRegistData(req.body);
  const errors = validateRegistData(req.body);
  if (errors) {
    res.render('./account/posts/regist-form', { errors, original });
    return;
  }
  res.render('./account/posts/regist-confirm', { original });
});

router.post('/posts/regist/execute', authorize('readWrite'), (req, res) => {
  // Validate session and cookies
  const secret = req.session._csrf;
  const token = req.cookies._csrf; // Be careful because's' is added
  if (tokens.verify(secret, token) === false) {
    throw new Error('Invalid token.');
  }

  const original = createRegistData(req.body);
  const errors = validateRegistData(req.body);

  if (errors) {
    res.render('./account/posts/regist-form', { errors, original });
    return;
  }

  MongoClient.connect(CONNECTION_URL, OPTIONS, (error, client) => {
    let db = client.db(DATABASE);
    db.collection('posts')
      .insertOne(original)
      .then(() => {
        // Delete session and cookies
        delete req.session._csrf;
        res.clearCookie('_csrf');
        res.redirect('/account/posts/regist/complete');
      }).catch((error) => {
        throw error;
      }).catch(() => {
        client.close();
      });
  });

  res.render('./account/posts/regist-complete');
});

router.get('/posts/regist/complete', authorize('readWrite'), (req, res) => {
  res.render('./account/posts/regist-complete');
});

module.exports = router;
