// 'tsc' in terminal, then 'node dist/app.js' to run in terminal.

// tsconfig.json strict typechecking should be set to false for the first section.

// Old way of doing things.

// // Function for creating a pizza.
// function Pizza(name: string) {
//   this.name = name;
//   this.toppings = [];
// }
// // Push the new topping into the array.
// Pizza.prototype.addTopping = function addTopping(topping: string) {
//   this.toppings.push(topping);
// };

// // Create new pizza.
// const pizza = new Pizza('Pepperoni');

// // Add topping to pizza.
// pizza.addTopping('pepperoni');

// // Result from console log should show a pizza object with the name and toppings array.
// console.log(pizza);

// tsconfig.json strict typechecking should be set to true for this second section.

// Create the class.
// Constructor function is basically the create pizza function.
// Properties need to be declared in the class before we can register values to them.
class Pizza2 {
  // Defining property of name to be used in constructor function.
  name: string;
  // Defining topping as an empty string array by default.
  toppings: string[] = [];

  constructor(name: string) {
    // .name is underlined if property name is not defined yet.
    this.name = name;
  }
  // Now this pushes a new topping into the array.
  addTopping(topping: string) {
    this.toppings.push(topping);
  }
}

// Create new pizza2.
const pizza = new Pizza2('Pepperoni');

// Add topping to pizza.
pizza.addTopping('pepperoni');

// Result from console log should show a pizza object with the name and toppings array.
console.log(pizza);
