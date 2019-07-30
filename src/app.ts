// Run `tsc` then `node dist/app.js` to see result in console.

// The uppercase version is a JavaScript typing and should not be used.
// The lowercase version is Typescript typing and should be adhered to.
// JS example looks like this `Number()`
// TS example looks like this `: number`

// Starting argument.
// let pizzaCost = 10;

// If we do the following Typescript infers 10 is a number.
// If we call a number as a string instead it will throw an error.
// pizzaCost = '25';

// We can explicity set the typing as a number like so.
// We also switch from a let to a const for the rest of the example.
const pizzaCost: number = 10;

const pizzaToppings: number = 2;

// Without providing typing and using a strict typechecking option in tsconfig
// these arguments will be underlined and flagged as wrong.
// function calculatePrice(cost, toppings) {
// }

// Typescript also infers the function results in a number, but we specify that typing too.
function calculatePrice(cost: number, toppings: number): number {
  return cost + 1.5 * toppings;
  // The following will not work because the result is a string instead of a number.
  // return (cost + 1.5 * toppings).toString();
}
const cost: number = calculatePrice(pizzaCost, pizzaToppings);
console.log('Pizza costs: ' + cost);
