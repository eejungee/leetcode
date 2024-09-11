/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    let x = []
    let result = 0
    for(let i=0; i<points.length; i++) {
        x.push(points[i][0])
    }
    x = [...new Set(x.sort())];
    for(let j=0; j<x.length; j++) {
        let minus = x[j+1]-x[j]
        if(minus > result){
            result = minus
        }
    }
    return result;
};