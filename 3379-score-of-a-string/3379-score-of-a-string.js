/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let len = s.length
    let sum = 0;
    for(let i=0; i<len-1; i++) {
      sum += Math.abs(s.charCodeAt(i) - s.charCodeAt(i+1))
    }
  return sum
};