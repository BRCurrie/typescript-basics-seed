// Run `tsc` then `node dist/app.js` to see result in console.

// Creating an interface is very similar to creating a type.
// Notice the = is missing in the interface syntax.
// Functions can be added to the interface then attached to objects and classes.
interface Pizza {
  name: string;
  sizes: string[];
  getAvailableSizes(): string[];
}

let pizza: Pizza;

// We want to add a function to get available sizes.
function createPizza(name: string, sizes: string[]): Pizza {
  return {
    name,
    sizes,
    getAvailableSizes() {
      return this.sizes;
    }
  };
}

pizza = createPizza('Pepperoni', ['small', 'medium']);
