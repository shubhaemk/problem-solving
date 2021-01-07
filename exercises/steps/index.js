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

module.exports = steps;
