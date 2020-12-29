// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  if (size < 0) {
    size = size * -1;
  }
  if (array.length <= size) return [[...array]];

  const chunkArray = [];
  let tempArray = [];

  for (const item of array) {
    tempArray.length !== size && tempArray.push(item);
    if (tempArray.length === size) {
      chunkArray.push(tempArray);
      tempArray = [];
    }
  }

  if (tempArray.length) {
    chunkArray.push(tempArray);
  }

  return chunkArray;
}

module.exports = chunk;
