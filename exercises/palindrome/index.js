// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

/**
 * Solution 1 ( The most straight forward )
    function palindrome(str) {
        return (
            str.split("").reduce((reversed, character) => character + reversed, "") ===
            str
        );
    }
 */
/**
 * Solution 2
    function palindrome(str) {
        return str
            .split("")
            .every((char, index) => char === str[str.length - index - 1]);
    }
 */

/**
  * Solution 3 
    function palindrome(str) {
        let isPalindrome;
        for (const [index, value] of str.split("").entries()) {
            if (isPalindrome === false) return false;
            const lastIndex = str.length - index - 1;
            const isLengthEven = str.length % 2 === 0;

            if (isLengthEven ? lastIndex === index + 1 : lastIndex === index)
            return isPalindrome;

            isPalindrome = value === str[lastIndex];
        }
    }
  */

function palindrome(str) {
  // this take cares of mid element
  if (str.length === 1 || str.length === 0) return true;
  const lastElementIndex = str.length - 1;
  // this take cares of extreme characters
  if (str[0] !== str[lastElementIndex]) return false;
  // this take cares of recursion
  if (str !== "") return palindrome(str.substring(1, lastElementIndex));
  // default return
  return true;
}

module.exports = palindrome;
