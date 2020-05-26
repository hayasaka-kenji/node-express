const log4js = require('log4js');
const levels = require("log4js/lib/levels")().levels;
const config = require('../../config/log4js.config');
let console, system, application, access;

log4js.configure(config);

console = log4js.getLogger();
system = log4js.getLogger('system');
application = log4js.getLogger('application');

const ApplicationLogger = function() {
  this.logger = log4js.getLogger('application');
};
const proto = ApplicationLogger.prototype;
for (let level of levels) {
  // JSは関数スコープなので関数を挟むことでfof文中のlevelが個別に保持される
  level = level.toLowerCase();
  proto[level] = (function(level) {
    return function (key, message){
      var logger = this.logger;
      logger.addContext('key', key);
      logger[level](message);
    };
  })(level);
}
application = new ApplicationLogger();

access = log4js.getLogger('access');
module.exports = {
  console, system, application, access
};