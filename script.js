'use strict';

// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   this.calcAge = function () {
//     console.log(2037 - this.birthYear);
//   };
// };
// const jonas = new Person('Jonas', 1991);
// console.log(jonas);

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);
// console.log(matilda, jack);

// const jay = 'Jay';

// console.log(jonas instanceof Person);
// console.log(jay instanceof Person);

// // Prototypes
// console.log(Person.prototype);
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// jonas.calcAge();
// matilda.calcAge();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(jonas));

// Person.prototype.species = 'Home Sapiens';
// console.log(jonas.species, matilda.species);

// console.log(jonas.hasOwnProperty('species'));
// // Object.prototype (top of prototype chain)
// console.log(jonas.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [3, 6, 6, 4, 1, 5, 5, 9, 9];
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(x => x + 1);

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   this.printSpeed();
// };
// Car.prototype.break = function () {
//   this.speed -= 5;
//   this.printSpeed();
// };
// Car.prototype.printSpeed = function () {
//   console.log(`${this.make} is going at ${this.speed} km`);
// };

// const bmw = new Car('BMW', 10);
// // const mercedes = new Car(5);
// bmw.accelerate();
// bmw.break();
// bmw.accelerate();

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  get age() {
    return 2037 - this.birthYear;
  }
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }
  get fullName() {
    return this._fullName;
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

const walter = new PersonCl('Walter White', 1965);

const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],
  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};
console.log(account.latest);
account.latest = 50;
console.log(account.movements);
