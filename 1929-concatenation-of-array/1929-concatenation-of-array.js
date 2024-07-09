/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let arr = []
    let len = nums.length
    for(let i=0; i<len*2; i++) {
        if(i>=len) {
            arr.push(nums[i-len])
        } else {
            arr.push(nums[i])
        }
    }
    return arr
};