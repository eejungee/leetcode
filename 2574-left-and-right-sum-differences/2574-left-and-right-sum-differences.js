/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    let left = [0]
    let right = [0]
    let result = []

    for(let i=0; i<nums.length-1; i++) {
        if(i===0) {
            left.push(nums[i])
            right.push(nums[nums.length-1])
        } else {
            left.push(left[i]+nums[i])
            right.push(right[i]+nums[nums.length-1-i])
        }
    }

    for(let j=0; j<left.length; j++) {
        result.push(Math.abs(left[j]-right[left.length-1-j]))
    }
    return result;
};