// Run `tsc` then `node dist/app.js` to see result in console.

// Named Function
function sumOrder(price: number, quantity: number): number {
  return price * quantity;
}

// Setting up to recieve a function that was not yet defined.
// Useful if we dont know what the signature of the function might be.
let sumOrderLet: Function;

// If using a function called by another library or that was not yet defined.
// We can change the value of this function.
sumOrderLet = (price: number, quantity: number): number => {
  return price * quantity;
};

const sum = sumOrderLet(25, 2);

console.log(`Total sum: ${sum}`);

// Setting up a function which will return a type of number. Input variable names are needed.
let sumNumber: (price: number, quantity: number) => number;

// We can also change the variable names and use implicit return.
// This will show us that x is price: number and y is quantity: number.
sumNumber = (x, y) => x * y;

const sumNum = sumNumber(15, 2);

console.log(`Second total: ${sumNum}`);
