'use strict';

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// ES6
class Person {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
}

const koichi = new Person('koichi', 1996);
console.log(koichi);

// Prototypes
Person.prototype.calcAge = function () {
  console.log(2053 - this.birthYear);
};

console.log(Person.prototype);

const john = new Person('john', 1994);
console.log(john);

john.calcAge();
