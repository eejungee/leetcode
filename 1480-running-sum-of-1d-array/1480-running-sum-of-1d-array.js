/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let answer = []
    for(let i=0; i<nums.length; i++) {
        if(i===0) {
            answer.push(nums[i])
        } else {
            answer.push(answer[i-1]+nums[i])
        }
    }
    return answer
};