// // this call apply bind
// // this class object 
// 'use strict';

// function greet() {
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
// }
// const user1 = {
//     name: "John",
//     age: 30
// };

// const user2 = {
//     name: "Alice",
//     age: 25
// };


// greet.call(user1); // Output: Hello, my name is John and I am 30 years old.
// greet.call(user2); // Output: Hello, my name is Alice and I am 25 years old.

// function incrementAge(years) {
//     this.age += years;
//     console.log(`New age of ${this.name} is ${this.age}`);
// }

// incrementAge.call(user1, 5); // Output: New age of John is 35
// incrementAge.apply(user2, [3]); // Output: New age of Alice is 28
// const incrementAgeForUser1 = incrementAge.bind(user1);
// incrementAgeForUser1(2); // Output: New age of John is 37


// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// const person1 = new Person("Bob", 40);
// console.log(person1.name,person1.age); // Output: Bob
// console.log(person1.age); // Output: 40

// const greet =()=>{
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
// }

// greet.call(person1); // Output: Hello, my name is Bob and I am 40 years old.

