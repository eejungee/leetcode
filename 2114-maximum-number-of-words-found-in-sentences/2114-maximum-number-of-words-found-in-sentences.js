/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let arr = sentences.map(el => (el.split(" ")).length)
    return Math.max(...arr)
};