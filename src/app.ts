// Run `tsc` then `node dist/app.js` to see result in console.

// Creating an interface is very similar to creating a type.
// Notice the = is missing in the interface syntax.
interface Pizza {
  name: string;
  sizes: string[];
}

let pizza: Pizza;

function createPizza(name: string, sizes: string[]): Pizza {
  return {
    name,
    sizes
  };
}

pizza = createPizza('Pepperoni', ['small', 'medium']);
