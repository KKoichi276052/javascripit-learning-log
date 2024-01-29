'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

restaurant.orderDelivery({
  time: '19:00',
  address: 'whatever',
  mainIndex: 1,
  starterIndex: 0,
});

// === Where to write my code ===

// === Destructuring array
let arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// not creating another array. Just assigning to variables
const [x, y, z] = arr;
console.log(x, y, z);

// skipping elements of original array
let [first, , second] = restaurant.categories;
console.log(first, second);

// Switching values of elements. Super easy!!
[first, second] = [second, first];
console.log(first, second);

// retrieve multiple values from objects
console.log(restaurant.order(1, 2));
const [starter, mainCourse] = restaurant.order(1, 2);
console.log(starter, mainCourse);

// How to destructure with nested array
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Assign default value with destructuring
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

// === Destructuring objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// destructuring with new variable name
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let d = 111;
let e = 999;
const obj = { d: 23, e: 7, f: 14 };
({ d, e } = obj);
console.log(d, e);

// Nested objects
const {
  fri: { open: o, close: g },
} = openingHours;
console.log(o, g);

// ====== Spread operator
// const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(newArr);

// retrieve array elements like array.join(' ')
console.log(...newArr);

// add elements to array like push. adding to both end is available
// const newMenu = [...restaurant.mainMenu, 'Gnocci']
const newMenu = ['Gnocci', ...restaurant.mainMenu];
console.log(newMenu);

// Passing arguments with spread operator
// const ingredients = [
//   prompt('ingredient1'),
//   prompt('ingredient2'),
//   prompt('ingredient3'),
// ];
// restaurant.orderPasta(...ingredients);

// spread operator with object
// making copy of object
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
console.log(restaurantCopy);

// Spread operator. Using ... on right side of =
arr = [1, 2, ...[3, 4]];

// Rest operator. Using ... on left side of =
const [h, l, ...rest] = [1, 2, 3, 4, 5];
console.log(rest);

// Rest operator to assign array elements
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(otherFood);

// Rest operator with objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// Rest operator with function(rest parameter)
function add(...numbers) {
  console.log(numbers);
}

add(3, 6, 3, 6, 7, 6, 3, 8);

// Short circuiting(&& and ||).
// || - First truthy value will be returned
console.log(3 || 'K');
console.log('' || 'K');
console.log(true || '');
console.log(undefined || null);

const guest2 = true || 10;
console.log(guest2);

// && - Returns first falsy value(if there is) or returns last value(if all value is truthy)
console.log(3 && 'K');
console.log(false && 'K');
console.log('K' && undefined && true);
console.log(true && true && 'last truthy value');

// nullish coalescing operator
// nullish: null and undefined(0 and empty string are treated as falsy)
// works same as || short circuiting but regard 0 and "" as a valid value
console.log(0 || 'true');
console.log(0 ?? 'true');
console.log('' ?? 'true');

// Logical assignment operator
const rest1 = {
  restaurantName: 'Capri',
  numGuests: 20,
};
const rest2 = {
  restaurantName: 'La Pizza',
  owner: 'whatever',
};

// OR assignment operator
rest1.numGuests = rest1.numGuests || 20;
console.log(rest1.numGuests);
// Can be written below
rest1.numGuests ||= 10;
console.log(rest1.numGuests);

// AND assignment operator
rest2.owner = rest2.owner && 'I am assigned';
console.log(rest2.owner);
rest2.owner &&= 'I am assigned';
console.log(rest2.owner);

// Coding challenge
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
};

// #1
// const players1 = [...game.players[0]];
// const players2 = [...game.players[1]];
// console.log(players1);
// console.log(players2);
const [players1, players2] = game.players;
console.log(players1);
console.log(players2);

// #2
const [gk, ...fieldPlayers] = game.players[0];
console.log(gk);
console.log(fieldPlayers);

// #3
const allPlayers = [...game.players[0], ...game.players[1]];
console.log(allPlayers);

// #4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// #5
function printGoals(...players) {
  console.log(players);
}
printGoals('Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels');

// for of loop
const menu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu2) console.log(item);

// destructuring with for of
for (const [i, el] of menu2.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// Coding challenge2
/* 
1. Loop over the game.scored array and print each player name to the console, 
along with the goal number (Example: "Goal 1: Lewandowski") 
2. Use a loop to calculate the average odd and log it to the console (We already 
studied how to calculate averages, you can go check if you don't remember) 
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this: 
Odd of victory Bayern Munich: 1.33 
Odd of draw: 3.25 
Odd of victory Borrussia Dortmund: 6.5 
Get the team names directly from the game object, don't hardcode them 
(except for "draw"). Hint: Note how the odds and the game objects have the 
same property names 😉 
4. Bonus: Create an object called 'scorers' which contains the names of the 
players who scored as properties, and the number of goals as the value. In this 
game, it will look like this: 
{ 
  Gnarby: 1, 
  Hummels: 1, 
  Lewandowski: 2 
}
*/

// #1
for (const [i, el] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${el}`);
}

// #2

// Coding challenge
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

// #1
const events = [...new Set(gameEvents.values())];
console.log(events);

// #2
console.log(gameEvents.delete(64));
console.log(gameEvents.has(64));
console.log(gameEvents);

// #3
// #4
function logEvent(value, key) {
  value <= 45
    ? console.log(`[FIRST HALF]${key}: ${value}`)
    : console.log(`[SECOND HALF]${key}: ${value}`);
}
gameEvents.forEach(logEvent);
// Coding challenge
const string1 = 'underscore_case';

let splitString1 = string1.split('_');
console.log(
  (splitString1[1] = splitString1[1].replace(
    splitString1[1][0],
    splitString1[1][0].toUpperCase()
  ))
);
console.log(splitString1);
console.log(splitString1.join(''));
