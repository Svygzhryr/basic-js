const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split('');
  let narr = [];
  let count = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      count++;
    } else {
      count > 1 ? narr.push(count): null;
      narr.push(arr[i])
      count = 1;
    }
  }
  return narr.join('');
}

module.exports = {
  encodeLine
};
