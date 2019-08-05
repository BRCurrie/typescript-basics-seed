// Run `tsc` then `node dist/app.js` to see result in console.

// tsconfig.json strict type checking was changed to false for this chapter.
// this will allow us to set the value to null.
let coupon: string = 'pizza25';
// The pipe operator would allow the variable to be set as a string or a null value.
let couponOrNull: string | null = 'pizza26';
// remove data from coupon variable such as an incorrect entry needing to be reset.
function removeCoupon(): void {
  // changing strictNullCheck to true will identify an issue with setting a string value to null.
  coupon = null;
}

// log initial coupon value.

console.log(coupon);

// reset coupon by calling the function
removeCoupon();

// log nullified value.
console.log(coupon);

// Set strictNullCheck to true to see the changes.
// Set strict typechecking to true to continue with the next chapters.
