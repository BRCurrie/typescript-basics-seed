// Run `tsc` then `node dist/app.js` to see result in console.

// Interfaces can be extended.
// We have moved sizes to its own interface. For example if it was used in a different
// interface like Cookies as well as Pizza.
interface Sizes {
  sizes: string[];
}

// By moving sizes to the Sizes interface, we can add `extends Sizes` to the Pizza
// interface to inherit the properties.
interface Pizza extends Sizes {
  name: string;
  getAvailableSizes(): string[];
}

let pizza: Pizza;

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
