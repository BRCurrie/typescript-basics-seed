// 'tsc' in terminal, then 'node dist/app.js' to run in terminal.

// Readonly modifier only allows us to read from the value.
// Obviously we cannot write to this property.

class Pizza {
  toppings: string[] = [];

  // The property will be available outside of the class but cannot be changed.
  constructor(readonly name: string) {}

  addTopping(topping: string) {
    this.toppings.push(topping);
  }
}

const pizza = new Pizza('Pepperoni');

pizza.addTopping('pepperoni');

// Logs Pepperoni from the above const. It is being read at this time.
console.log(pizza.name);

// Does not work.
pizza.name = 'ABC';
