const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain : [],

  getLength() {
    return this.chain.length;
  },

  addLink(value = ' ') {
    this.chain.push(`( ${value} )`);
    return this;
  },

  removeLink( i ) {
    if (typeof i !== 'number' || i > this.chain.length  || i < 1 || i % 1) {
      this.chain = [];
      throw Error("You can't remove incorrect link!");
    }
    this.chain.splice(i - 1, 1)
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let ans = this.chain.join('~~');
    this.chain = [];
    return ans;
  }
  
};

module.exports = {
  chainMaker
};
