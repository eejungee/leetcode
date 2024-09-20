/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let answer = []

    for(let i=0; i<nums.length; i++) {
        let cnt = 0;
        for(let j=0; j<nums.length; j++) {
            if(i !== j) {
             nums[i] > nums[j]? cnt++ : cnt
            }
        }
        answer.push(cnt)
    }
    return answer;
};