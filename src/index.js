module.exports = function reverse (n) {
  let reverseArr = Array.from(String(Math.abs(n))).reverse();
  return +reverseArr.join('');
}
