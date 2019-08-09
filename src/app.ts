// Run `tsc` then `node dist/app.js` to see result in console.

// // We can assign any kind of type to a type alias.
// Purely virtual for typechecking purposes. Does not get compiled down to JS.
// After compiling with `tsc` you can see the types are gone.
// There will be a var set to 'small' and a function call with a medium argument.

// // Setup with a union type. Default is small.
// let pizzaSize: 'small' | 'medium' | 'large' = 'small';

// // setup the function. We still need to use the union type.
// const selectSize = (size: 'small' | 'medium' | 'large') => {
//     pizzaSize = size;
// };

// // Now we call the function. This value is protected and you cannot enter 'smalls' for example.
// selectSize('medium')

// // // // // Here we setup a type first.
type Size = 'small' | 'medium' | 'large';

// Setup with a new type alias. Default is still small.
let pizzaSize: Size = 'small';

// Function setup now uses Size type alias as well.
const selectSize = (size: Size) => {
  pizzaSize = size;
};

// Now we call the function.
selectSize('medium');

// Function types can also be setup with type alias.
type Callback = (size: Size) => void;

// And modify the function to include the callback type.
const selectSize2: Callback = x => {
  pizzaSize = x;
};

// And we can see that void is now the expected result as nothing is returned from the function.
selectSize2('medium');
