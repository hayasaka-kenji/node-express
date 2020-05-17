const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('index.ejs'); // views配下のindexを指定。
})


module.exports = router;