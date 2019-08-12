// 'tsc' in terminal, then 'node dist/app.js' to run in terminal.

// Setting the value of a property.
// element.className = 'abc'
// Getting the property.
// console.log(element.className);

// We just add the word abstract and it cannot be instantiated on its own anymore.
// We can also use this on exported classes as well.
abstract class Sizes {
  constructor(public sizes: string[]) {}

  set availableSizes(sizes: string[]) {
    this.sizes = sizes;
  }

  get availableSizes() {
    return this.sizes;
  }
}

// Currently our sizes class can be instantiated outside of the pizza class.
// new Sizes(['small']);
// We do not want to invoke this class on its own.

class Pizza extends Sizes {
  toppings: string[] = [];
  constructor(readonly name: string, public sizes: string[]) {
    super(sizes);
  }

  addTopping(topping: string) {
    this.toppings.push(topping);
  }
}
const pizza = new Pizza('Pepperoni', ['small', 'medium']);

pizza.addTopping('pepperoni');

console.log(pizza.name);

console.log(pizza.availableSizes);
