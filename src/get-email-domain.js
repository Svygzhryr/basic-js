const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let regex = new RegExp(/@[A-Za-z0-9-]+\.[A-Za-z]+/g);
  let ans = email.match(regex)[0];
  ans = ans.slice(1, ans.length);
  return ans
}

module.exports = {
  getEmailDomain
};
