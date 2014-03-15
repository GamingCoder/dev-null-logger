function Logger() {}

Logger.prototype.log = function (val) {};
Logger.prototype.info = function (val) {};
Logger.prototype.warn = function (val) {};
Logger.prototype.error = function (val) {};
Logger.prototype.trace = function () {};
Logger.prototype.debug = function (val) {};
Logger.prototype.dir = function (val) {};

exports = module.exports = new Logger();