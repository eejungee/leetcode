/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let cnt = 0;
    nums.map(el => {
        if(el%3 === 1) {
            cnt++
        } else if (el%3===2) {
            cnt++
        }
    })
    return cnt
};