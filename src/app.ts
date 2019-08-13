// 'tsc' in terminal, then 'node dist/app.js' to run in terminal.

// The whole point of static is to access properties or methods without having to
// create a new instance.

// We do not need to do anything major.
// Comes in very handy when we need to create utility libraries, functions,
// or classes that do particular things, like pure functions that don't mutate
// or deal with datasets.

// Typical example of a static property.
// const date = Date.now();
// console.log(date);

// Create static method or property with a class.
class Coupon {
  // This is a static property.
  static allowed = ['Pepperoni', 'Blazing Inferno'];

  //   Static Method. If we want to prefix our coupon code then add the discount %.
  static create(percentage: number) {
    return `PIZZA_RESTAURANT_${percentage}`;
  }
}

// Because the code for allowed is a purely static property,
// we do not need to create a new instance.
// new Coupon9();

// We can just access this property directly.
console.log(Coupon.allowed);

// Does not properly indicate a percentage value, but demonstrates how it would
// be used as a static method.
console.log(Coupon.create(25));
