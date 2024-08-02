module.exports = function reverse (n) {
  let reverseArr = Array.from(String(n)).reverse();
  return +reverseArr.join('');
}
