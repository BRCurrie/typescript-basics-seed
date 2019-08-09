// Run `tsc` then `node dist/app.js` to see result in console.

interface Sizes {
  sizes: string[];
}

// We can add optional properties to interfaces. As an example we want to add toppings
// after we have created the pizza.
// We mark this property as optional by adding the `?` in the syntax.
interface Pizza extends Sizes {
  name: string;
  toppings?: number;
  getAvailableSizes(): string[];
}

let pizza: Pizza;

// We could add toppings and a default behavior to this function, but that may not be
// desired in our application.
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

pizza.toppings = 1;
