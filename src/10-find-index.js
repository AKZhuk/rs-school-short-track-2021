/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let low = 0;
  let high = array.length;
  let mid = 0;
  while (low <= high) {
    mid = Math.floor((high + low) / 2);
    const guess = array[mid];
    if (guess === value) {
      break;
    } else if (guess > value) {
      high = mid--;
    } else {
      low = mid++;
    }
  }
  return mid;
}

module.exports = findIndex;
