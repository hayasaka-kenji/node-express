module.exports = function(req, res, next) {
  // IPアドレス
  const ipaddress = req.headers["x-forwarded-for"] ||
    req.connection.remoteAddress ||
    (req.socket && req.socket.remoteAddress) ||
    (req.connection.socket && req.connection.socket.remoteAddress) ||
    "0.0.0.0";
  // 日付
  const date = (new Date()).toISOString();
  // メソッド
  const method = req.method;
  // URL
  const url = req.url;
  // ユーザーエージェント
  const uq = req.headers['user-agent'];

  console.log(`${ipaddress} [${date}] "${method} ${url} - ${uq}`);
  next(); //次に繋げるために必ず入れる。
}