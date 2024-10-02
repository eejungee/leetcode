/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let cnt = 0;
    nums.sort((a,b) => a-b)
    nums.map(el => {if(el < k) {cnt++}})
    return cnt
};