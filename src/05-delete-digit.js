/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = String(n).split('');
  const minIndex = arr.indexOf(String(Math.min.apply(null, arr)));
  arr.splice(minIndex, 1);
  return Number(arr.join(''));
}

module.exports = deleteDigit;
