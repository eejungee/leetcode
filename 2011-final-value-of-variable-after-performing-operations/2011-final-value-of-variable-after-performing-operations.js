/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let sum = 0
    operations.map(el => {
        if(el.slice(1,2) == "+") {
            sum += 1
        } else if(el.slice(1,2) == "-") {
            sum -= 1
        }
    })
    return sum
};