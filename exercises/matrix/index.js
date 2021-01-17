// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  let maxNumber = n * n;
  const MOVE_RIGHT = "move_right";
  const MOVE_LEFT = "move_left";
  const MOVE_DOWN = "move_down";
  const MOVE_UP = "move_up";

  const spiralMatrix = [];

  for (let index = 0; index < n; index++) {
    let tempArray = [];
    tempArray.length = n;
    spiralMatrix.push(tempArray);
  }

  let rowStart = 0;
  let rowEnd = n - 1;
  let columnStart = 0;
  let columnEnd = n - 1;

  let currentRow = 0;
  let currentColumn = 0;

  let currentAction = "move_right";

  for (let number = 1; number <= maxNumber; number++) {
    spiralMatrix[currentRow][currentColumn] = number;

    if (
      currentRow === rowStart &&
      currentColumn === columnStart &&
      currentRow !== 0 &&
      currentAction !== MOVE_RIGHT
    ) {
      currentAction = MOVE_RIGHT;
      columnStart++;

      /**
         [[1,2,3,4],
      ->  [12,0,0,5],
          [11,0,0,6],
          [10,9,8,7]] 
       */
    }

    if (
      currentRow === rowEnd &&
      currentColumn === columnStart &&
      currentAction !== MOVE_UP
    ) {
      currentAction = MOVE_UP;
      rowEnd--;
      /**
         [[1,2,3,4],
          [0,0,0,5],
          [0,0,0,6],
      ->  [10,9,8,7]] 
       */
    }

    if (
      currentRow === rowEnd &&
      currentColumn === columnEnd &&
      currentAction !== MOVE_LEFT
    ) {
      currentAction = MOVE_LEFT;
      columnEnd--;
      /**
         [[1,2,3,4],
          [0,0,0,5],
          [0,0,0,6],
          [0,0,0,7]] <-
       */
    }

    if (
      currentAction === MOVE_RIGHT &&
      currentColumn === columnEnd &&
      currentAction !== MOVE_DOWN
    ) {
      rowStart++;
      currentAction = MOVE_DOWN;

      /**
         [[1,2,3,4], <-
          [0,0,0,0],
          [0,0,0,0],
          [0,0,0,0]] 
       */
    }

    if (currentAction === MOVE_RIGHT) {
      currentColumn++;
    }

    if (currentAction === MOVE_DOWN) {
      currentRow++;
    }

    if (currentAction === MOVE_LEFT) {
      currentColumn--;
    }

    if (currentAction === MOVE_UP) {
      currentRow--;
    }
  }

  return spiralMatrix;
}

module.exports = matrix;
