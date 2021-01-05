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
            .toLowerCase()
            .split("")
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

/**
  *  Solution 2
    const getFilteredString = (string) => string.replace(/[^\w]/g, "").toLowerCase();

    const generateCharacterMap = (stringA, stringB) => {
    const stringACharacterMap = {};
    const stringBCharacterMap = {};

    for (let index = 0; index < stringA.length; index++) {
        const keyA = stringA[index];
        const keyB = stringB[index];

        stringACharacterMap[keyA] = stringACharacterMap[keyA] + 1 || 1;

        stringBCharacterMap[keyB] = stringBCharacterMap[keyB] + 1 || 1;
    }

    return { stringACharacterMap, stringBCharacterMap };
    };

    function anagrams(stringA, stringB) {
    const stringAFiltered = getFilteredString(stringA);
    const stringBFiltered = getFilteredString(stringB);

    if (stringAFiltered.length !== stringBFiltered.length) return false;

    const { stringACharacterMap, stringBCharacterMap } = generateCharacterMap(
        stringAFiltered,
        stringBFiltered
    );

    if (
        Object.keys(stringACharacterMap).length !==
        Object.keys(stringBCharacterMap).length
    )
        return false;
    
    return Object.keys(stringACharacterMap).every(
        (key) => stringACharacterMap[key] === stringBCharacterMap[key]
    ); 

    for (let char in stringACharacterMap) {
        if (stringACharacterMap[char] !== stringBCharacterMap[char]) return false;
    }

    return true;
    }
  */

function anagrams(stringA, stringB) {
  return (
    stringA.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("") ===
    stringB.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("")
  );
}

module.exports = anagrams;
