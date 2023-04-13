const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(str) {
  throw new NotImplementedError('Not implemented');

  // let domain = str.match(/\.[A-Za-z0-9]+/);
  // let subdomain = str.match(/\.[A-Za-z]+\./);
  // let subsubdomain = str.match(/[A-Za-z]+\./);

  // return {

  // }
}

module.exports = {
  getDNSStats
};
