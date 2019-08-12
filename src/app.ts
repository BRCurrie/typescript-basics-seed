// 'tsc' in terminal, then 'node dist/app.js' to run in terminal.

// Setting the value of a property.
// element.className = 'abc'
// Getting the property.
// console.log(element.className);

class Sizes {
  constructor(public sizes: string[]) {}

  set availableSizes(sizes: string[]) {
    this.sizes = sizes;
  }

  get availableSizes() {
    return this.sizes;
  }
}

// We extend the Pizza class with the Sizes class so we can access sizes for each pizza.
class Pizza extends Sizes {
  toppings: string[] = [];
  // Constructors for derived classes must use a super call.
  // We add the sizes: string[] to the argument, and pass sizes into the super call.
  constructor(readonly name: string, public sizes: string[]) {
    // We do not just pass in the array here, we pass it in when we create each pizza.
    super(sizes);
  }

  addTopping(topping: string) {
    this.toppings.push(topping);
  }
}
// We pass in the available sizes for the super call here.
const pizza = new Pizza('Pepperoni', ['small', 'medium']);

pizza.addTopping('pepperoni');

console.log(pizza.name);
// We can now use the inherited getters and setters from the sizes class.
// We retrieve the sizes now.
console.log(pizza.availableSizes);
