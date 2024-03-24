import * as ShoppingCart from './shoppingCart.js';

ShoppingCart.addToCart('shsehb', 5);
import add from './shoppingCart.js';

add();

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);

// top level await normally synchronous so make it async function
const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = await getLastPost();
console.log(lastPost);
