// 'tsc' in terminal, then 'node dist/app.js' to run in terminal.

// First Object.
// const pizza = {
//   name: 'Pepperoni',
//   price: 15
// };

// First object can contain a function.
const pizza = {
  name: 'Pepperoni',
  price: 15,
  getName: function() {
    return this.name;
  }
};
// boilerplate code reduction. `getname()` instead of getname: function()
console.log(pizza.getName());

// Second Object
const toppings = ['pepperoni'];
// Third object combines the previous two.
// const order = {
//     pizza: pizza,
//     toppings: toppings,
// };

// Cleaner Third object. This is exactly the same.
const order = { pizza, toppings };

console.log(order);

// Objects can be joined inside of a function as well.
function createOrder(pizza, toppings) {
  return { pizza, toppings };
}

console.log(createOrder(pizza, toppings));
