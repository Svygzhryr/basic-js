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
function getDNSStats(dom) {
  let domains = {};

  dom.forEach(e => {
    let arr = e.split('.').reverse();

    arr.forEach((e, i) => {
      let key = '.'.concat(arr.slice(0, i + 1).join('.'));

      if (domains[key]) {
        domains[key] += 1;
      } else domains[key] = 1;
      
    });
  });

  return domains;
}

module.exports = {
  getDNSStats
};
