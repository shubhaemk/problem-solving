// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowelsItterative(str) {
  const vowels = ["a", "e", "i", "o", "u"];

  let count = 0;

  for (let character of str.toLowerCase()) {
    for (let vowel of vowels) {
      if (vowel === character) {
        count += 1;
        break;
      }
    }
  }

  return count;
}

function vowelsRecursive(str) {
  if (str.length === 0) {
    return 0;
  }

  const vowel = ["a", "e", "i", "o", "u"];

  const count = vowel.some(
    (vowelCharacter) => vowelCharacter === str[0].toLowerCase()
  )
    ? 1
    : 0;

  return count + vowels(str.slice(1));
}

function vowels(str) {
  // match function returns array of letters found and null if nothing found
  const vowelArray = str.match(/[aeiou]/gi);
  return vowelArray ? vowelArray.length : 0;
}

module.exports = vowels;
