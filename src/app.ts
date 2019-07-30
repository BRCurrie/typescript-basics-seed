// 'tsc' in terminal, then 'node dist/app.js' to run in terminal.

// Initial function allows variables to be passed into it.

// function multiply(a, b) {
//     return a * b;
// };

// Passes the numbers 5 and 25 into the multiply function when called.
// console.log(multiply(5, 25));

// Second function has a value declared for the second variable, which will usually increment the value by 10.
function multiply2(a, b = 10) {
  return a * b;
}

// This function can also be written as an if statement for b not having a value.
// function multiply2(a, b) {
//     if (!b) {
//         b = 10;
//     } return a * b;
// }

console.log(multiply2(5));

// However the second variable can be overwritten as needed.

console.log(multiply2(5, 25));
