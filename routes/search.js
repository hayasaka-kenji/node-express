const { CONNECTION_URL, OPTIONS, DATABASE } = require('../config/mongodb.config');
const router = require('express').Router();
const MongoClient = require('mongodb').MongoClient;

router.get('/*', (req, res) => {
  const keyword = req.query.keyword || '';
  const regexp = new RegExp(`.*${keyword}.*`);
  MongoClient.connect(CONNECTION_URL, OPTIONS, (error, client) => {
    let db = client.db(DATABASE);
    db.collection('posts').find({
      // OR検索を正規表現(部分一致)で実行 
      $or: [{ title: regexp }, { content: regexp }]
    }).sort({ published: -1 }).toArray().then((list) => {
      const data = { keyword, list };
      res.render('./search/list', data);
    }).catch((error) => {
      throw error;
    }).then(() => {
      client.close();
    });
  });
});




module.exports = router;