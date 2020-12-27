// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let maxChar = null;
  let maxCharObject = {};
  for (let char of str) {
    if (maxCharObject[char]) {
      maxCharObject[char] += 1;
    } else {
      maxCharObject[char] = 1;
    }

    if (maxChar) {
      if (maxCharObject[char] > maxChar.count) {
        maxChar["character"] = char;
        maxChar["count"] = maxCharObject[char];
      }
    } else {
      maxChar = {};
      maxChar["character"] = char;
      maxChar["count"] = maxCharObject[char];
    }
  }

  return maxChar["character"];
}

module.exports = maxChar;
