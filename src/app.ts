// 'tsc' in terminal, then 'node dist/app.js' to run in terminal.

// We do not currently have any interfaces to work with our classes.
// You can only define properties. You cannot specify if it is for a setter or getter.
// This is where unit tests come into play.
interface SizesInterface {
  // We cannot define private/protected properties in the interface.
  // It would work if it was public.
  // sizes: string[];
  availableSizes: string[];
}

// We add the implements keyword and our interface.
abstract class Sizes implements SizesInterface {
  constructor(protected sizes: string[]) {}

  set availableSizes(sizes: string[]) {
    this.sizes = sizes;
  }

  get availableSizes() {
    return this.sizes;
  }
}

// Just like the pizza class extends the Sizes interface,
// the PizzaInterface extends the SizesInterface.
// This is all done for type checking purposes. It would show a red underline
// in the editor if something was mispelled for example.
interface PizzaInterface extends SizesInterface {
  readonly name: string;
  toppings: string[];
  // Both functions will not return anything, so the type is void.
  updateSizes(sizes: string[]): void;
  addTopping(topping: string): void;
}

class Pizza extends Sizes implements PizzaInterface {
  toppings: string[] = [];
  constructor(readonly name: string, sizes: string[]) {
    super(sizes);
  }
  public updateSizes(sizes: string[]) {
    this.sizes = sizes;
  }

  addTopping(topping: string) {
    this.toppings.push(topping);
  }
}
const pizza = new Pizza('Pepperoni', ['small', 'medium']);

pizza.addTopping('pepperoni');
console.log(pizza.availableSizes);
pizza.updateSizes(['large']);
console.log(pizza.availableSizes);
