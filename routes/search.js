const { CONNECTION_URL, OPTIONS, DATABASE } = require('../config/mongodb.config');
const { MAX_ITEM_PER_PAGE } = require('../config/app.config').search;
const router = require('express').Router();
const MongoClient = require('mongodb').MongoClient;

router.get('/*', (req, res) => {
  let page = req.query.page ? parseInt(req.query.page) : 1;
  const keyword = req.query.keyword || '';
  const regexp = new RegExp(`.*${keyword}.*`);
  const query = {
    $or: [{ title: regexp }, { content: regexp }]
  };
  MongoClient.connect(CONNECTION_URL, OPTIONS, (error, client) => {
    let db = client.db(DATABASE);
    // 検索の総件数と検索結果の一部が必要
    Promise.all([
      db.collection('posts')
        .find(query)
        .count(),
      db.collection('posts')
        .find(query)
        .sort({ published: -1 })
        .skip((page - 1) * MAX_ITEM_PER_PAGE) // ページ番号は1番から始まるので1を引く
        .limit(MAX_ITEM_PER_PAGE) // 上限を設定
        .toArray()
    ]).then((results) => {
      const data = {
        keyword,
        count: results[0],
        list: results[1],
        pagination: {
          max: Math.ceil(results[0] / MAX_ITEM_PER_PAGE),
          current: page
        }
      };
      res.render('./search/list', data);
    }).catch((error) => {
      throw error;
    }).then(() => {
      client.close();
    });
  });
});

module.exports = router;