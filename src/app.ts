// Run `tsc` then `node dist/app.js` to see result in console.

let pizzaSize: string = 'small';

// Union type checking allows us to specify multiple types.
// We could also specify numbers and set the variable to a number type.
function selectSize(size: 'small' | 'medium' | 'large'): void {
  pizzaSize = size;
}
// Intentionally mispelled. typescript helps us out here.
// If we hover over the problem we see what the accepted values would be.
selectSize('meduim');

console.log(`Pizza size: ${pizzaSize}`);
