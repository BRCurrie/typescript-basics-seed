// Run `tsc` then `node dist/app.js` to see result in console.

interface Sizes {
  sizes: string[];
}

interface Pizza extends Sizes {
  name: string;
  toppings?: number;
  getAvailableSizes(): string[];
  // Adding an index signature.
  // Each pizza gets a unique id, however we don't know the property name.
  [key: number]: string;
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

// If we have flattened an array structure and want to use a value as a lookup structure.
// Our pizza id is xyz and we cannot set properties dynamically.
// Our number might be a unique id from the server.
// We want a key to index this to and be able to use dynamic values.
pizza[1] = 'xyz';

pizza.toppings = 1;
