// Run `tsc` then `node dist/app.js` to see result in console.

type Pizza = { name: string; toppings: number };

const pizza: Pizza = { name: 'Blazing Inferno', toppings: 5 };

// We are going to parse the pizza object into JSON and parse it back.
// Convert the answer into a string.
const serialized = JSON.stringify(pizza);

// Then convert the data back, calling it on the object itself.
// Does not offer completion when we expect Pizza type back.
// Right not typescript assumes the object returning is : any.
// function getNameFromJSON(obj: string): Pizza {
//     return JSON.parse(obj);
// };

// This does allow us to call the name and is autocompleted. But we want to do that in the function.
// getNameFromJSON(serialized).name;

// Old way to solve this. Pizza type is removed from behind argument. Type of .name or
// .topping would be inferred and autocomplete works to fill in function.
// function getNameFromJSON(obj: string) {
//     return (<Pizza>JSON.parse(obj)).name;
// };

getNameFromJSON(serialized);

// Preferred way of typing the JSON object as : Pizza. Type is correctly applied
// and autocomplete works.
function getNameFromJSON(obj: string) {
  return (JSON.parse(obj) as Pizza).name;
}
