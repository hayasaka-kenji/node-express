const router = require('express').Router();

router.get('/', (req, res) => {
  // システムログエラー確認
  // throw new Error('sample');
  res.render('./index');
});

module.exports = router;