/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let answer = []
    words.map((el, i) => {
      if(el.includes(x)) return answer.push(i)
    })
    return answer
};