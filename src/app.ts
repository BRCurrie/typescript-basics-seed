// 'tsc' in terminal, then 'node dist/app.js' to run in terminal.

// Setting the value of a property.
// element.className = 'abc'
// Getting the property.
// console.log(element.className);

class Sizes {
  constructor(public sizes: string[]) {}

  // Properties here do not work the same way as the constructor();
  set availableSizes(sizes: string[]) {
    this.sizes = sizes;
  }

  // Similarly we could set the above function as a date string with a date inside.
  // Then before we assing the date we could call the new date constructor and then
  // define that in the class.

  get availableSizes() {
    return this.sizes;
  }
}

// The setter allows us to do this. We create a new instance of the class and
// pass in the string array.
const sizes = new Sizes(['small', 'medium']);
// Invoke getter function.
console.log(sizes.availableSizes);
// Set the available sizes to something else as if it was for another type of pizza.
// Override the value initially set.
sizes.availableSizes = ['medium', 'large'];
// Invoke getter function again, this time with updated array.
console.log(sizes.availableSizes);

class Pizza {
  toppings: string[] = [];

  constructor(readonly name: string) {}

  addTopping(topping: string) {
    this.toppings.push(topping);
  }
}

const pizza = new Pizza('Pepperoni');

pizza.addTopping('pepperoni');

console.log(pizza.name);
