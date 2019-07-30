// 'tsc' in terminal, then 'node dist/app.js' to run in terminal.

const toppings = ['bacon', 'chilli'];

const newToppings = ['pepperoni'];

// Things were previously concatonated. Now the spread operator can handle this for us.
// This creates a copy with one array and all 3 toppings inside. It does not keep a reference
// to the original arrays.
const allToppings = [...toppings, ...newToppings];

console.log(allToppings);
