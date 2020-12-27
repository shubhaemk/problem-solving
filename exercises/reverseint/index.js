// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

/**
 * Solution 1 ( The best solution )
    function reverseInt(n) {
        let reverseNumber = 0;
        while (n !== 0) {
            reverseNumber = reverseNumber * 10 + (n % 10);
            n = parseInt(n / 10);
        }

        return reverseNumber;
    }
 */

function reverseInt(n) {
  const reverseNumber = n.toString().split("").reverse().join("");

  if (n < 0) return parseInt(reverseNumber) * -1;

  return parseInt(reverseNumber);
}

module.exports = reverseInt;
