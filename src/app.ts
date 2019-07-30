// 'tsc' in terminal, then 'node dist/app.js' to run in terminal.

// Initial function uses an array of a definite size.

// function sumAll(arr) {
//   return arr.reduce((prev, next) => prev + next);
// }

// const sum = sumAll([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Using rest parameters, we can pass in an indefinite size object.
// Rest parameters can be used as a secondary argument. For example if we expected a message first.
function sumAll(message, ...arr) {
  console.log(message);
  return arr.reduce((prev, next) => prev + next);
}

const sum = sumAll('Hello!', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(sum);
