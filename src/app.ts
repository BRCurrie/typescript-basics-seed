// Run `tsc` then `node dist/app.js` to see result in console.

// Adding the ? behind quantity makes it optional.
let sumNumber: (price: number, quantity?: number) => number;

// This is the original function.
// sumNumber = (x, y) => x * y;

// This conditional statement gives a default quantity equal to 1 if no argument is supplied.
// sumNumber = (x, y) => {
//   if (y) {
//     return x * y;
//   }
//   return x;
// };

// Alternate function for sumNumber above.
// altNumber = (x, y) => {
//     const q = y || 1;
//     return x * q;
// }

// Really shortened code. Y now has a default quantity of 1 and can be replaced with
// arguments passed in when the function is called.
sumNumber = (x, y = 1) => x * y;

const sumNum = sumNumber(15);

console.log(`Total: ${sumNum}`);
