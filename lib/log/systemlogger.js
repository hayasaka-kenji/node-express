const logger = require('./logger').system;

// ミドルウェア 返り値をもたせてほかのものと体裁を合わせる。
module.exports = function(options) {
  return function(err, req, res, next) {
    logger.error(err.message);
    next(err);
  };
};