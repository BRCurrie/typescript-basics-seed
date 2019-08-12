// 'tsc' in terminal, then 'node dist/app.js' to run in terminal.

// We are going to change the sizes to be a private property.
// We cannot use them by simply calling pizza.sizes on a function on its own.
// Instead we use the declaration of protected.
// This allows us to modify the sizes class through the pizza class that extends it,
// but it is still private outside of that scope.
abstract class Sizes {
  constructor(protected sizes: string[]) {}

  set availableSizes(sizes: string[]) {
    this.sizes = sizes;
  }

  get availableSizes() {
    return this.sizes;
  }
}

class Pizza extends Sizes {
  toppings: string[] = [];
  constructor(readonly name: string, sizes: string[]) {
    super(sizes);
  }

  //  But we might want to update sizes from inside the pizza class.
  //  This does not work if sizes is private, but will if it is protected.
  public updateSizes(sizes: string[]) {
    this.sizes = sizes;
  }

  addTopping(topping: string) {
    this.toppings.push(topping);
  }
}
const pizza = new Pizza('Pepperoni', ['small', 'medium']);

pizza.addTopping('pepperoni');
// We log the current available sizes.
console.log(pizza.availableSizes);
// Then update our protected members and see our update.
pizza.updateSizes(['large']);
console.log(pizza.availableSizes);
