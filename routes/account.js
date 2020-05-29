const router = require('express').Router();

const validateRegistData = function (body) {
  let isValidated = true, errors = {};

  if (!body.url) {
    isValidated = false;
    errors.url = "No URL has been entered. Please enter the URL that starts with '/'.";
  }

  if (body.url && /^\//.test(body.url) === false ) {
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

router.get('/', (req, res) => {
  res.render('./account/index');
});

router.get('/posts/regist', (req, res) => {
  res.render('./account/posts/regist-form');
});

router.post('/posts/regist/input', (req, res) => {
  const original = createRegistData(req.body);
  res.render('./account/posts/regist-form', { original });
});

router.post('/posts/regist/confirm', (req, res) => {
  const original = createRegistData(req.body);
  const errors = validateRegistData(req.body);
  if(errors){
    res.render('./account/posts/regist-form', { errors, original });
    return;
  }
  res.render('./account/posts/regist-confirm', {original});

});
module.exports = router;
