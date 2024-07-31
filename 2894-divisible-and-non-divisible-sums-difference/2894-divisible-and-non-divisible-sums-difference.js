/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let sum = 0
    for(let i=1; i<=n; i++) {
        i%m !== 0? sum += i : sum -= i
    }
    return sum
};