console.log('exporting module');

const shippingCost = 10;
const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 352;
const totalQuantity = 42;

export { totalPrice, totalQuantity as tq };
export default function () {
  console.log('add');
}
