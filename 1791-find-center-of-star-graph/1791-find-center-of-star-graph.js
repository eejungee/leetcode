/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    let same = 0;
    if(edges[0][0] === edges[1][0] || edges[0][0] === edges[1][1]) {
        same = edges[0][0] 
    } else if(edges[0][1] === edges[1][0] || edges[0][1] === edges[1][1]) {
        same = edges[0][1]
    }
    for(let i=2; i<edges.length; i++) {
        if(edges[i][0] !== same && edges[i][1] !== same) {
            return 0;
        }
    }
    return same
};