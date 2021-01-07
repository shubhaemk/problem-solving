// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

/**
 *  Solution 1
    function capitalize(str) {
    return str
        .split(" ")
        .map((word) => `${word[0].toUpperCase()}${word.substr(1, word.length)}`)
        .join(" ");
    }
 */

/**
  * Solution 2
  function capitalize(str) {
    let isSpace = true;
    let capitalizedString = "";

    for (let characterIndex = 0; characterIndex < str.length; characterIndex++) {
        if (str[characterIndex].trim() === "") {
        isSpace = true;
        capitalizedString = `${capitalizedString} `;
        continue;
        }
        if (isSpace) {
        capitalizedString = `${capitalizedString}${str[
            characterIndex
        ].toUpperCase()}`;
        isSpace = false;
        continue;
        }

        capitalizedString = `${capitalizedString}${str[characterIndex]}`;
    }

    return capitalizedString;
    } 
  */

/**
   *  Solution 3
   function capitalize(str) {
    return str
        .split(" ")
        .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
        .join(" ");
    }
   */

function capitalize(str) {
  let capitalizedString = "";
  for (let characterIndex = 0; characterIndex < str.length; characterIndex++)
    characterIndex === 0 || str[characterIndex - 1].trim() === ""
      ? (capitalizedString += str[characterIndex].toUpperCase())
      : (capitalizedString += str[characterIndex]);
  return capitalizedString;
}

module.exports = capitalize;
