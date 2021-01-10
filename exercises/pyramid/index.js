// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

/**
 * Solution 1
 function pyramid(n) {
    const rowCount = n;
    const columnCount = n + (n - 1);

    let hashCount = 1;
    let emptySpaceCount = columnCount - 1;

    for (let step = 1; step <= rowCount; step++) {
        const emptyString = " ".repeat(emptySpaceCount / 2);
        const finalString = emptyString + "#".repeat(hashCount) + emptyString;
        hashCount = hashCount + 2;
        emptySpaceCount = emptySpaceCount - 2;
        console.log(finalString);
    }
    }
 */

function pyramidByMe(n) {
  const rowCount = n;
  const columnCount = n + (n - 1);

  // starts from 1 because these are steps
  for (let rowIndex = 1; rowIndex <= rowCount; rowIndex++) {
    let rowArray = [];
    rowArray.length = columnCount;
    // starts from 0 because we iterating an array
    for (let columnIndex = 0; columnIndex < columnCount; columnIndex++) {
      const columnMid = Math.floor(columnCount / 2);

      // checks is item is a middle one
      const isColumnMid = columnIndex === columnMid;

      // checks if the item is to the left of mid and if yes whether its # or " "
      const isColumnToLeft =
        columnIndex >= columnMid - (rowIndex - 1) && columnIndex < columnMid;

      // checks if the item is to the right of mid and if yes whether its # or " "
      const isColumnToRight =
        columnIndex <= columnMid + (rowIndex - 1) && columnIndex > columnMid;

      if (isColumnMid || isColumnToLeft || isColumnToRight) {
        rowArray[columnIndex] = "#";
      } else {
        rowArray[columnIndex] = " ";
      }
    }

    console.log(rowArray.join(""));
  }
}

function pyramid(n, row = 0, step = "") {
  const columnCount = n + (n - 1);
  if (row === n) {
    return;
  }

  if (step.length === columnCount) {
    console.log(step);
    return pyramid(n, ++row);
  }

  const midPoint = Math.floor(columnCount / 2);
  let stringToAdd;
  if (midPoint - row <= step.length && midPoint + row >= step.length) {
    stringToAdd = "#";
  } else {
    stringToAdd = " ";
  }

  pyramid(n, row, step + stringToAdd);
}

module.exports = pyramid;
