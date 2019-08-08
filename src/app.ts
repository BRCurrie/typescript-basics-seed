// Run `tsc` then `node dist/app.js` to see result in console.

// The pizza below is given an object type with properties of name of type string, etc.
// We can add a function property that will return a string.
let pizza: { name: string; price: number; getname(): string };

pizza = {
  name: 'Plain Old Pepperoni',
  price: 20,
  getname() {
    return pizza.name;
  }
};

console.log(pizza.getname());
