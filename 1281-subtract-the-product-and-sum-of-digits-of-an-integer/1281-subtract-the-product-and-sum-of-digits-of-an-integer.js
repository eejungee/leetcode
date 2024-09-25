/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let product = 1;
    let sum = 0;
    n = n.toString().split("")
    for(let i=0; i<n.length; i++) {
        product *= Number(n[i])
        sum += Number(n[i])
    }

    return product-sum
};