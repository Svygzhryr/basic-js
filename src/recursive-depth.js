const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    throw new NotImplementedError('Not implemented');
  }
  // calculateDepth(arr) {
  //   const stack = [...arr]
  //   let size = 0
    
  //   while (stack.length) {
  //     const next = stack.pop()
  //     size += 1
      
  //     if (Array.isArray(next)) {
  //       stack.push(...next)
  //     }
  //   }
    
  //   return size
  // }
}

module.exports = {
  DepthCalculator
};
