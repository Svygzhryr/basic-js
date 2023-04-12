const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const k = 0.693 / HALF_LIFE_PERIOD;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *0
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(SAMPLE_ACTIVITY) {
  throw new NotImplementedError('Not implemented');

  // let ans = Math.ceil(Math.log(MODERN_ACTIVITY/SAMPLE_ACTIVITY)/k);
  // console.log(ans)
  // return !isNaN(ans) && ans > 0 ? ans : false;
}

module.exports = {
  dateSample
};
