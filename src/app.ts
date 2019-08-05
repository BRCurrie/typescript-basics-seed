// Run `tsc` then `node dist/app.js` to see result in console.

// Type is inferred as a string.
let implicitCoupon = 'pizza25';

// Type is explicity stated to be a string.
let explicitCoupon: string = 'pizza25';

// Type is inferred to be any type.
let anyCoupon;
anyCoupon = 'pizza25';
