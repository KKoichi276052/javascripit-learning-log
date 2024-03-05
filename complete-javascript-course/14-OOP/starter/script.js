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

  // With using class, no need to add to Prototype
  calcAge() {
    console.log(2053 - this.birthYear);
  }
}

const koichi = new Person('koichi', 1996);
console.log(koichi);

// add methods Prototypes
// Person.prototype.calcAge = function () {
//   console.log(2053 - this.birthYear);
// };

console.log(Person.prototype);

const john = new Person('john', 1994);
console.log(john);

john.calcAge();

///////////////// Coding challenge /////////////////////
// #1
class Car {
  constructor(maker, speed) {
    this.maker = maker;
    this.speed = speed;
  }
}

Car.prototype.accelerate = function () {
  this.speed *= 2;
};
Car.prototype.brake = function () {
  this.speed /= 2;
};

const bmw = new Car('BMW', 120);
console.log(bmw);
bmw.accelerate();

console.log(bmw);

bmw.brake();
console.log(bmw);
