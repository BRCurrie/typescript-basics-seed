// Run `tsc` then `node dist/app.js` to see result in console.

const pizzas: number = 5;

function offerDiscount(orders: number): boolean {
  return orders >= 3;
}

// You do not deal with setting types on conditional statements.
if (offerDiscount(pizzas)) {
  console.log(`You are entitled to a discount!`);
} else {
  console.log(`Order more than 3 pizzas for a discount!`);
}
