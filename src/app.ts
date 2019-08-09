// Run `tsc` then `node dist/app.js` to see result in console.

// Tuples allow us to suggest to TS some kind of data structure inside of an array,
// which is made up of different types.

let pizza: [string, number, boolean];
// You will only want to do this when you can be sure the data structure will match this exactly.
pizza = ['Pepperoni', 20, true];
// You cannot rearrange the data structure. It must match the tuple type.
