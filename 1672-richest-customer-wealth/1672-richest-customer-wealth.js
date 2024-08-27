/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let ans = 0;
    for(let i=0; i<accounts.length; i++) {
        let sum = accounts[i].reduce((acc, cur) => acc+cur)
        sum > ans ? ans = sum : ans
    }
    return ans
};