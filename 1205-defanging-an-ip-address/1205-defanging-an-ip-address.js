/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    return address.split("").map(el => {
        if(el === ".") {
            return el = "[.]"
        } else {
            return el
        }
    }).join("")
};