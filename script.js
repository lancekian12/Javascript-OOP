'use strict';

// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   //   this.calcAge = function () {
//   //     console.log(2037 - this.birthYear);
//   //   };
// };
// const jonas = new Person('Jonas', 1991);
// Person.hey = function () {
//   console.log('Hey there');
//   console.log(this);
// };
// Person.hey();
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

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//   get age() {
//     return 2037 - this.birthYear;
//   }
//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }
//   get fullName() {
//     return this._fullName;
//   }
//   static hey() {
//     console.log('Hey there!');
//     console.log(this);
//   }
// }

// const jessica = new PersonCl('Jessica Davis', 1996);
// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.age);

// console.log(jessica.__proto__ === PersonCl.prototype);

// const walter = new PersonCl('Walter White', 1965);

// const account = {
//   owner: 'Jonas',
//   movements: [200, 530, 120, 300],
//   get latest() {
//     return this.movements.slice(-1).pop();
//   },
//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };
// console.log(account.latest);
// account.latest = 50;
// console.log(account.movements);

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };
// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();

// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979);
// sarah.calcAge();

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

// const Car = class {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     this.speed += 10;
//     this.printSpeed();
//   }
//   break() {
//     this.speed -= 5;
//     this.printSpeed();
//   }
//   printSpeed() {
//     console.log(
//       `${this.make} is going at ${this.speed} km`
//     );
//   }
//   get speedUS() {
//     return this.speed / 1.6;
//   }
//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// };

// const ford = new Car('Ford', 120);
// console.log(ford);
// console.log(ford.speedUS);
// ford.accelerate();
// ford.accelerate();
// ford.accelerate();
// ford.break();
// ford.speedUS = 50;
// console.log(ford);

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };
// // Linking prototype
// Student.prototype = Object.create(Person.prototype);
// Student.prototype.introduce = function () {
//   console.log(
//     `My name is ${this.firstName} and I study ${this.course}`
//   );
// };
// const mike = new Student('Mike', 2020, 'Computer Science');
// console.log(mike);
// mike.introduce();
// mike.calcAge();

// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);
// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

// const Car = class {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     this.speed += 10;
//     this.printSpeed();
//   }
//   break() {
//     this.speed -= 5;
//     this.printSpeed();
//   }
//   printSpeed() {
//     console.log(
//       `${this.make} is going at ${this.speed} km`
//     );
//   }
//   get speedUS() {
//     return this.speed / 1.6;
//   }
//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// };

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

// const Ev = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };
// Ev.prototype = Object.create(Car.prototype);
// Ev.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };
// Ev.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge -= 1;
//   console.log(
//     `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
//   );
// };

// const tesla = new Ev('Tesla', 120, 23);
// console.log(tesla);
// tesla.accelerate();
// tesla.break();
// tesla.chargeBattery(90);
// tesla.accelerate();
// console.log(Ev.accelerate());

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     super(fullName, birthYear);
//     this.course = course;
//   }
//   introduce() {
//     console.log(
//       `My name is ${this.fullName} and I study ${this.course}`
//     );
//   }
//   calcAge() {
//     console.log(
//       `Im ${
//         2037 - this.birthYear
//       } years old, but as student I feel more like ${
//         2037 - this.birthYear + 10
//       }`
//     );
//   }
// }

// const martha = new StudentCl(
//   'Marhtha Jones',
//   2012,
//   'Computer Science'
// );
// martha.introduce();
// martha.calcAge();

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };
// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (
//   firstName,
//   birthYear,
//   course
// ) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };
// StudentProto.introduce = function () {
//   console.log(
//     `My name is ${this.firstName} and I study ${this.course}`
//   );
// };
// const jay = Object.create(StudentProto);
// jay.init('Jay', 2010, 'Computer Science');
// jay.introduce();
// jay.calcAge();

// class Account {
//   // Public fields (instances)
//   locale = navigator.language;

//   // Privates fields
//   #movements = [];
//   #pin;

//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.#pin = pin;
//     // this._movements = [];
//     // this.locale = navigator.language;

//     console.log(`Thanks for opening an account ${owner} `);
//   }
//   getMovements() {
//     return this.#movements;
//   }
//   deposit(val) {
//     this.#movements.push(val);
//     return this;
//   }
//   withdrawal(val) {
//     this.deposit(-val);
//     return this;
//   }
//   requestLoan(val) {
//     if (this._approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan approved`);
//       return this;
//     }
//   }
//   // 4) Private methods
//   // #approveLoan(val) {
//   _approveLoan(val) {
//     return true;
//   }
//   static helper() {
//     console.log('Helper');
//   }
// }
// const acc1 = new Account('Jonas', 'EUR', 1111);
// acc1.deposit(250);
// acc1.withdrawal(140);
// acc1.requestLoan(1000);
// // acc1._approveLoan(1000);
// console.log(acc1.getMovements());
// console.log(acc1);
// Account.helper();
// // console.log(acc1.#pin);
// // console.log(acc.#movements);
// // console.log(acc1.#approveLoan(100));

// // Chaining
// acc1
//   .deposit(300)
//   .deposit(500)
//   .withdrawal(35)
//   .requestLoan(100);
// console.log(acc1.getMovements());

class Student extends Person {
  university = 'University of Lisbon';
  #studyHours = 0;
  #course;
  static numSubjects = 10;

  constructor(fullName, birthYear, startYear, course) {
    super(fullName, birthYear);
    this.startYear = startYear;
    this.#course = course;
  }
  introduce() {
    console.log(
      `I study ${this.#course} at ${this.university}`
    );
  }
  study(h) {
    this.#makeCoffee();
    this.#studyHours += h;
  }
  #makeCoffee() {
    return 'Here is a coffee for you 😊';
  }
  get testScore() {
    return this._testScores;
  }
  set testScore(score) {
    this._testScores = score < 20 ? score : 0;
  }
  static printCurriculum() {
    console.log(`There are ${this.numSubjects} subjects`);
  }
}
const student = new Student(
  'Jonas',
  2020,
  2037,
  'Medicine'
);
