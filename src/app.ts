// 'tsc' in terminal, then 'node dist/app.js' to run in terminal.

// Private is only available inside of the class. Public will be available everywhere.

class Pizza {
  //   public name: string;
  toppings: string[] = [];

  //   constructor(name: string) {
  //     this.name = name;
  //   }

  // This constructor declares the public property of name and defines internally
  // this.name = name. Shorthand syntax for the code above.
  constructor(public name: string) {}

  //   Public function. Properties and functions are public by default.
  addTopping(topping: string) {
    this.toppings.push(topping);
  }
  //   Private function.
  private addTopping2(topping: string) {
    this.toppings.push(topping);
  }
}

const pizza = new Pizza('Pepperoni');

// Public function adding to the toppings array.
pizza.addTopping('pepperoni');

// Private function cannot be called and will be red underlined.
// pizza.addTopping2('olives');

console.log(pizza);
