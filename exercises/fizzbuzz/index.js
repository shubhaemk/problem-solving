// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  if (n < 0) return;

  for (let number = 1; number <= n; number++) {
    if (number % 3 === 0 && number % 5 === 0) {
      // number % 15 === 0
      console.log("fizzbuzz");
      continue;
    }

    if (number % 3 === 0) {
      console.log("fizz");
      continue;
    }

    if (number % 5 === 0) {
      console.log("buzz");
      continue;
    }

    console.log(number);
  }
}

module.exports = fizzBuzz;
