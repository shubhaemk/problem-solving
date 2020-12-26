// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/**
 * Solution 1
    function reverse(str) {
        if (typeof str !== "string") return;
        let reverString = "";

        for (let index = str.length - 1; index >= 0; index--)
            reverString = `${reverString}${str[index]}`;

        return reverString;
    }
*/

/**
  * Solution 2
    function reverse(str) {
        return str.split("").reverse().join("");
    }
*/

/**
 *  Solution 3
    function reverse(str) {
        if (typeof str !== "string") return;
        let reverString = "";

        for (let character of str) reverString = character + reverString;

        return reverString;
    }   
 
*/

/**
  * Solution 4
    function reverse(str) {
        return str
            .split("")
            .reduce((reversed, character) => character + reversed, "");
    } 
*/

/**
   * Solution 5 ( The Best )
    function reverse(str, strLength) {
        if (strLength === 0) return "";
        const stringLength = strLength ? strLength - 1 : str.length - 1;
        return str[stringLength] + reverse(str, stringLength);
    }
*/

/**
   * Solution 6  
    function reverse(str) {
        const strLength = str.length;
        if (!strLength) return "";

        const lastLetter = str[strLength - 1];
        str = str.substring(0, strLength - 1);

        return lastLetter + reverse(str);
    }
*/

function reverse(str) {
  const strLength = str.length;
  if (!strLength) return "";

  const lastLetter = str[strLength - 1];
  str = str.substring(0, str.length - 1);

  return lastLetter + reverse(str);
}

module.exports = reverse;
