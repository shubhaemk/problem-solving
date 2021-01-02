// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

/**
 * Solution 1
  function chunk(array, size) {
    if (size < 0) {
      size = size * -1;
    }
    if (array.length <= size) return [[...array]];

    const finalChunk = [];
    let tempChunk = [];

    for (const item of array) {
      tempChunk.length !== size && tempChunk.push(item);
      if (tempChunk.length === size) {
        finalChunk.push(tempChunk);
        tempChunk = [];
      }
    }

    if (tempChunk.length) {
      finalChunk.push(tempChunk);
    }

    return finalChunk;
  }
 */

function chunk(array, size) {
  let index = 0;
  const finalChunk = [];

  while (index < array.length) {
    const updatedIndex = index + size;
    let chunk = array.slice(index, updatedIndex);
    finalChunk.push(chunk);
    index = updatedIndex;
  }

  return finalChunk;
}

module.exports = chunk;
