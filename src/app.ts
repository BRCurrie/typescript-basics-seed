// Run `tsc` then `node dist/app.js` to see result in console.

// Never type is used when the function never actually returns something, or in our case
// an error is thrown.
function orderError(error: string): never {
  throw new Error(error);
  // We are never going to return a value!
}

orderError('Something went wrong');
