const router = require('express').Router();

router.use((req, res, next)=> {
  console.log((new Date()).toISOString());
  next();// ミドルウェアなのでnextを忘れないに
});

// /user
router.get('/', (req, res) => { // router.getで書く
  res.send('/');
});

// /user/about
router.get('/about', (req, res) => {
  res.send('/about');
});

module.exports = router;