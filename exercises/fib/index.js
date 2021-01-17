// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Itterative Solution
/**
    function fib(n) {
    let index = 2;
    let fibonacciArray = [0, 1];

    while (index <= n) {
        fibonacciArray.push(fibonacciArray[index - 2] + fibonacciArray[index - 1]);
        index++;
    }

    return fibonacciArray[fibonacciArray.length - 1];
    }
 */

/**
  function fib(n, previousNumber = 0, currentNumber = 1) {
    if (n === 0) {
        return previousNumber;
    }
    if (n === 1) {
        return currentNumber;
    }

    return fib(n - 1, currentNumber, currentNumber + previousNumber);
    }
  */

/**
   * Exponential Time Solution O(2 ^ n) Its very slow as it needs twice the time if one more elment is added
    function fib(n) {
        if (n < 2) {
            return n;
        }
        return fib(n - 1) + fib(n - 2);
    }
   */

function memoize(func) {
  const cache = {};

  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }

    const results = func.apply(this, args);
    cache[args] = results;

    return results;
  };
}

function slowFib(n) {
  if (n < 2) {
    return n;
  }

  // call memoized version of function
  return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);

module.exports = fib;
