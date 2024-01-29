// // exercise for variables

// console.log("hello world!");

// let firstName = "John";
// console.log("first name is " + firstName);

// const country = "Japan";
// const continent = "Asia";
// let population = 10000000000;

// console.log(country, continent, population);

// // exercise for data types, and let const var

// const isIsland = true;
// const language = "Japanese";

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// // country = "Australia";

// // exercise for operators

// let halfPopulation = population / 2;
// console.log(halfPopulation, halfPopulation++);
// console.log(6000000 < population);
// console.log(33000000 < population);
// let description =
//   country +
//   " is in " +
//   continent +
//   " and its " +
//   population +
//   " people speaks " +
//   language;
// console.log(description);

// // exercise for template literals

// description = `${country} is in ${continent} and its ${population} people speak ${language}`;
// console.log(description);

// // TODO: start from taking decisions exercise

// // exercise for if statements
// if (population > 33000000) {
//   console.log(`${country}'s population is above average`);
// } else {
//   console.log(`${country}'s population is below average`);
// }

// // Type coercion and conversions
// console.log("9" - "5");
// console.log("19" - "13" + "17");
// console.log("19" - "13" + 17);
// console.log("123" < 57);
// console.log(5 + 6 + "4" + 9 - 4 - 2);

// // exercise for equality operators
// const numNeighbours = Number(
//   prompt("How many neighbour countries does your country have?")
// );

// if (numNeighbours === 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//   console.log("more than 1 border!");
// } else {
//   console.log("no border!");
// }

// file:///C:/Users/kkoic/Downloads/assignments-js-fundamentals.pdf

const day = "tuesday";

if (day === ",onday") {
  console.log("Plan course structure!");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy weekend");
} else {
  console.log("Not a valid day");
}
