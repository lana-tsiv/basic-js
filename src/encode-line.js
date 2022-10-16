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
// 

const encodeLine = (str) =>
  str.replace(/([a-z])\1*/g, (a) =>
    a.length > 1 ? a.length + a[0] : a[0]
  );

module.exports = {
  encodeLine
};
