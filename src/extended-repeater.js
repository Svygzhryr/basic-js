const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let nstr = '';
  options.repeatTimes ? null : options.repeatTimes = 1;
  options.separator ? null : options.separator = '+';
  options.addition !== undefined ? null : options.addition = '';
  options.additionRepeatTimes ? null : options.additionRepeatTimes = 1;
  options.additionSeparator ? null : options.additionSeparator = '|';

  for (let i = 1; i <= options.repeatTimes; i++) {
      nstr = nstr + str;
      for (let j = 1; j <= options.additionRepeatTimes; j++) {
        nstr = nstr + options.addition;
        if (j !== options.additionRepeatTimes) {
            nstr +=options.additionSeparator
        }
      }
        if (i !== options.repeatTimes) {
            nstr += options.separator;
        }
  }
  return nstr
}

module.exports = {
  repeater
};
