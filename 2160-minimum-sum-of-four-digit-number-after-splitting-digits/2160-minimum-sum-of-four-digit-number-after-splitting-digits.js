/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    num = num.toString().split('').sort()
    num = num.map(el => Number(el))
    return num[0]*10+num[2]+num[1]*10+num[3]
};