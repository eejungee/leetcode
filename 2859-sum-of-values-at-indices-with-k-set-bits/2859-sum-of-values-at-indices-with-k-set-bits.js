/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function(nums, k) {
    let trans = []
    let result = 0
    trans = nums.map((el,i) => i.toString(2))
    for(let i=0; i<trans.length; i++) {
        let bits = 0;
        trans[i].split("").map(el => {
            if(el==1) bits++
        })
        if(bits === k) {
            result += nums[i]
        }
    }
    return result
};