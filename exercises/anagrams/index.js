// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

/**
 * Solution 1 
    function anagrams(stringA, stringB) {
        const getSortedArray = (str) =>
            str
            .replace(/[^\w]/g, "")
            .split("")
            .map((letter) => letter.toLowerCase())
            .sort();

        const stringAArray = getSortedArray(stringA);
        const stringBArray = getSortedArray(stringB);

        if (stringAArray.length !== stringBArray.length) return false;

        for (let index = 0; index < stringAArray.length; index++) {
            if (stringAArray[index] !== stringBArray[index]) {
            return false;
            }
        }

        return true;
        }
 */

function anagrams(stringA, stringB) {
  const stringAFiltered = stringA.replace(/[^\w]/g, "");
  const stringBFiltered = stringB.replace(/[^\w]/g, "");

  if (stringAFiltered.length !== stringBFiltered.length) {
    return false;
  }

  const generateCharacterMap = (str) => {
    const characterMap = {};

    for (let character of str) {
      if (characterMap[character]) {
        characterMap[character] += 1;
      } else {
        characterMap[character] = 1;
      }
    }

    return characterMap;
  };

  const stringACharacterMap = generateCharacterMap(stringAFiltered);
  const stringBCharacterMap = generateCharacterMap(stringBFiltered);

  if (
    Object.keys(stringACharacterMap).length !==
    Object.keys(stringBCharacterMap).length
  ) {
    return false;
  }

  return Object.keys(stringACharacterMap).every(
    (key) => stringACharacterMap[key] === stringBCharacterMap[key]
  );
}

console.log(anagrams("hello", "lloeh"));

module.exports = anagrams;
