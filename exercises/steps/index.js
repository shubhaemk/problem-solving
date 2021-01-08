// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

/**
* Solution 1
function steps(n) {
    for (let step = 1; step <= n; step++) {
        const emptySpace = " ".repeat(n - step);
        const actualSteps = "#".repeat(step);

        console.log(actualSteps + emptySpace);
    }
 }  
*/

/**
 * Solution 2
 function steps(n) {
    for (let step = 1; step <= n; step++)
        console.log(`${"#".repeat(step)}${" ".repeat(n - step)}`);
}  
*/

/**
 * Solution 3
 function steps(n) {
    const getRepeatativeString = (str, count) => {
      let finalString = "";
      while (count > 0) {
        finalString += str;
        count--;
      }
      return finalString;
    };

    let index = 1;
    while (index <= n) {
      console.log(
        `${getRepeatativeString("#", index)}${getRepeatativeString(
          " ",
          n - index
        )}`
      );
      index++;
    }
  }
 */

/**
  * Solution 4
  function steps(n) {
    for (let row = 0; row < n; row++) {
      let stair = "";

      for (let column = 0; column < n; column++) {
        if (column <= row) {
          stair += "#";
        } else {
          stair += " ";
        }
      }

      console.log(stair);
    }
  }
  */

/**
  * Solution 5
  function steps(n, step = 1) {
    const emptySteps = n - step;

    let finalStep = "";
    for (let index = 0; index < step; index++) finalStep += "#";
    for (let index = 0; index < emptySteps; index++) finalStep += " ";

    console.log(finalStep);

    if (emptySteps === 0) {
      return;
    } else {
      steps(n, step + 1);
    }
  }
  */
// solution 5 is the best
function steps(n, step = 0, stair = "") {
  if (n === step) {
    return;
  }
  if (n === stair.length) {
    console.log(stair);
    return steps(n, step + 1);
  }

  if (stair.length <= step) {
    stair += "#";
  } else {
    stair += " ";
  }

  steps(n, step, stair);
}

module.exports = steps;
