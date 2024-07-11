/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
  const conversion = (a) => Number(a.toFixed(5))
    return [conversion(celsius+273.15), conversion(celsius*1.80+32.00)]
};