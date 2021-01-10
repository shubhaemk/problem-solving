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

  let rowLimit = n - 1;
  let columnLimit = n - 1;
  let currentRow = 0;
  let currentColumn = 0;

  let currentAction = MOVE_RIGHT;

  for (let number = 1; number <= maxNumber; number++) {
    spiralMatrix[currentRow][currentColumn] = number;

    console.log({ currentColumn });
    console.log({ currentRow });
    console.log({ columnLimit });
    console.log(spiralMatrix);

    if (currentAction === MOVE_RIGHT && currentColumn <= columnLimit) {
      currentColumn++;
    }

    if (currentAction === MOVE_DOWN && currentRow <= rowLimit) {
      currentRow++;
    }

    if (currentColumn === columnLimit && currentRow <= rowLimit) {
      currentAction = MOVE_DOWN;
    }

    if (currentRow === rowLimit + 1) {
      break;
    }
  }

  //console.log(spiralMatrix);
}

matrix(5);

module.exports = matrix;
