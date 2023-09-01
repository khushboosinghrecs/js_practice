// //1️⃣ Using Constructor Functions:

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.greet = function() {
//   console.log(`Hello, my name is ${this.name}, and I am ${this.age} years old.`);
// };

// const john = new Person("John", 30);
// john.greet(); // Output: Hello, my name is John, and I am 30 years old.


// //2️⃣ Using ES6 Classes:

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log(`Hello, my name is ${this.name}, and I am ${this.age} years old.`);
//   }
// }

// const jane = new Person("Jane", 25);
// jane.greet(); // Output: Hello, my name is Jane, and I am 25 years old.

const personPrototype = {
  name: "John Doe",          // Property: Name of the person
  introduce() {              // Method: Introduce the person
    console.log(`Hi, I'm ${this.name}!`);
  },
};

// Creating a New Person: Carl
const carl = Object.create(personPrototype); // Carl is a person

// Using Inherited Method
carl.introduce(); // Output: Hi, I'm John Doe!

// Let's Explore
console.log(
  carl,                        
  Object.prototype,    
  personPrototype       
);

onsole.log('start')

const promise1 = new Promise((resolve, reject) => {
  console.log(1)
})

const promise2 = new Promise((resolve, reject) => {
      console.log("hhhh")
    setTimeout(() =>{
  console.log(2);
    }, 0)
})
async function getData() {
      return await Promise.resolve('I made it!');
}
const data = getData();
console.log(data);