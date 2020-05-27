/**
 * 追加オプション
 * MongoClient用オプション設定
 */

module.exports = {
  CONNECTION_URL: 'mongodb://user:user@localhost:27017/weblog',
  DATABASE: 'weblog',
  OPTIONS: {
    family: 4,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
};