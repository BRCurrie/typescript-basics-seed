// Run `tsc` then `node dist/app.js` to see result in console.

let selectedTopping: string = 'pepperoni';
// This is an impure function. It will mutate values outside of itself.
// selectTopping function is of type void.
// It will typically be used when you are not returning something from a function.
function selectTopping(topping: string): void {
  selectedTopping = topping;
}

selectTopping('bacon');

console.log(selectedTopping);
