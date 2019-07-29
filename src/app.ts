const pizzas = [{ name: 'Pepperoni', toppings: ['Pepperoni'] }];

// Use 'tsc' command in terminal to compile.
// Then use 'node dist/app.js' to show results in terminal.

// Initial function example.

// const mappedPizzas = pizzas.map(function(pizza) {
//   return pizza.name.toUpperCase();
// });

// Instead of above code, an arrow function looks like this.

// const mappedPizzas = pizzas.map(pizza => {
//     return pizza.name.toUpperCase();
// });

// Implicit return will look like this. This is exactly equivalent to the initial function.
// This leads to a much cleaner codebase.

const mappedPizzas = pizzas.map(pizza => pizza.name.toUpperCase());

console.log(mappedPizzas);

// Initial function for this argument.
// 'this' is a reference to pizza2 object of {name: , and getName: }.

// const pizza2 = {
//   name: 'Blazing Inferno',
//   getName: function() {
//     console.log(this);
//   }
// };

// The following function now sets a Timeout of 100 ms and 'this' now refers to the setTimeout.

// const pizza2 = {
//   name: 'Blazing Inferno',
//   getName:  function() {
//     setTimeout(function() {
//       console.log(this);
//     }, 100);
//   }
// };

// Using an arrow function 'this' now refers back to the object and will allow uses of parts of it such as this.name or this.getName.

// const pizza2 = {
//   name: 'Blazing Inferno',
//   getName: function() {
//     setTimeout(() => {
//       console.log(this);
//     }, 100);
//   }
// };

// End result without using setTimeout to call the object name immediately instead of using the timeout.
// 'this.name' was switched to pizza2.name because this has a global value and lacks specific context.
const pizza2 = {
  name: 'Blazing Inferno',
  getName: () => pizza2.name
};

//  Below is a console log of the result of the getName function.
//  Initial function result is undefined.
console.log(pizza2.getName);
