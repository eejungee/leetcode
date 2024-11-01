/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    let arr = [start]
    let result = 0
    if(n>1) {
        for(let i=1; i<n; i++) {
            arr.push(start + 2*i)
        }
        for(let j=1; j<n; j++) {
            if(j == 1) {
                result = arr[0] ^ arr[j]
            } else {
                result = result ^ arr[j]
            }
        }
    } else {
        result = start
    }
    return result
};