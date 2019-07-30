// 'tsc' in terminal, then 'node dist/app.js' to run in terminal.

const pizza = {
  name: 'Pepperoni',
  toppings: ['pepperoni']
};

// We can create a function that expects pizza as an argument.
// function order(pizza) {
// };

// Now we can call the function and pass in the pizza constant.
// order(pizza);

// You can create an object literal structure around the argument to destructure the const.
// This means the argument coming in is an object and it has a name property and a toppings property.
// function order({ name, toppings }) {
//   console.log(name, toppings);
// }

// If you needed to rename a property, for example if it needed to be changed before
// sending it to a server.
// function order({ name: pizzaName, toppings: pizzaToppings }) {
//   console.log(pizzaName, pizzaToppings);
// }

// If we wanted to return a new object with those new properties.
function order({ name: pizzaName, toppings: pizzaToppings }) {
  return { pizzaName, pizzaToppings };
}
// This would return the entire object with those two properties.
const myOrder = order(pizza);
// You can also destructure the returned result if you only want one of the properties.
// This syntax is very similar to an import statement.
// Instead of asking for a property from a module, we are asking for a property of an object.
const { pizzaName } = order(pizza);

// Arrays can be destructured too.
const toppings = ['bacon', 'pepperoni', 'chilli'];

// Typically you would do this.
// const firstItem = toppings[0];

// However we can use array destructuring. The names do not matter, only the order matters.
const [first, second, third] = toppings;

// These will be returned as string values because they are no longer in an array.
console.log(first, third);

// Arrays can be destructed after they are passed into a function.
// A typing of : any has been added to the array because of Typescript type checking.
function logToppings([first, second, third]: any) {
  console.log(second);
}
// Call the function and pass in the array.
// This will only log the second topping as a string.
logToppings(toppings);
