function sayHi(){
    console.log(name);
    console.log(age);
    var name='lydia';
    let age=21
}
sayHi();

for(var i=0; i<3; i++){
    setTimeout(()=>{
        console.log(i)
    }, 1)
}

for(let i=0; i<3; i++){
    setTimeout(()=>{
        console.log(i)
    }, 1)
}

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => {
    return 2 * Math.PI * this.radius;
  },
};
console.log(shape.diameter());
console.log(shape.perimeter());

console.log(true);
console.log("djosidj");
console.log(+true);
console.log(!"Lydia");

let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);
console.log(a === b);
console.log(b === c);

class Chameleon {
  static colorChange(newColor) {
    this.newColor = newColor;
    return this.newColor;
  }

  constructor({ newColor = "green" } = {}) {
    this.newColor = newColor;
  }
}

const feedle = new Chameleon({ newColor: "purple" });
console.log(feedle.colorChange("oranage"));

let greeting;
greeting = {};
console.log(greeting);

function bark() {
  console.log("woof");
}

bark.animal = "dog";

bark();
console.log(bark);

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person("Lyndia", "Halle");

Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

console.log(member.getFullName());

console.log(Person.getFullName);

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const l = new Person("Lydia", "Halle");
const i = new Person("Sarah", "Smith");
const j = Person("khdhi", "djoidjso");
console.log(l, i, j());

function sum(a, b) {
  return a + b;
}
console.log(typeof sum(1, "3"));

let number = 0;
console.log(number++);
console.log(++number);
console.log(number);

function getPersonInfo(one, two, three) {
  console.log(one);
  console.log(two);
  console.log(three);
}

const person = "Lydia";
const age = 21;

getPersonInfo`${person} is ${age} years old`;

The template literal ${person} is ${age} years old is passed to the function getPersonInfo as arguments.
However, because of the way the template literal is written (with the function name immediately before it), it's treated differently. Instead of passing the template literal as a single string argument, JavaScript breaks it into pieces and passes them as separate arguments along with any interpolated values.
The getPersonInfo function receives these pieces of the template literal as separate arguments: 'Lydia', ' is ', 21, and ' years old'.
Inside the getPersonInfo function, these arguments are logged to the console.
let a = { n: "l" };
let b = { n: "l" };
console.log(a == b, a === b);
function checkAge(data) {
  if (data === { age: 18 }) {
    console.log("You are an adult!");
  } else if (data == { age: 18 }) {
    console.log("You are still an adult.");
  } else {
    console.log(`Hmm.. You don't have an age I guess`);
  }
}

checkAge({ age: 18 });

function getAge(...args) {
  console.log(args);
  console.log(typeof args);
}

getAge(21, "jpjp", 90.0);

function getAge() {
  "use strict";
  age = 21;
  console.log(age);
}

getAge();

const sum = eval("10*10+5");

console.log(sum);

var num = 8;
var num = 10;

// let num = 78;
// let num = 89;
//  when you try to redeclare the same variable num using let in the same scope, you'll encounter an error because let does not allow redeclaration of variables within the same scope.
console.log(num);

const obj = { 1: "a", 2: "b", 3: "c" };
const set = new Set([1, 2, 3, 4, 5]);

console.log(obj.hasOwnProperty("1")); // true
console.log(obj.hasOwnProperty(1)); // true
console.log(set.has("1")); // false
console.log(set.has(1)); // true

const obj = { a: "one", b: "two", a: "three" };
console.log(obj);

for (let i = 1; i < 5; i++) {
  if (i === 3) continue;
  console.log(i);
}

String.prototype.giveLydiaPizza = () => {
  return "Just give Lydia pizza already!";
};

const name = "Lydia";

console.log(name.giveLydiaPizza());

const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b], a);

const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"));
const baz = () => console.log("Third");

bar();
foo();
baz();

const person = { name: "Lydia" };

function sayHi(age) {
  return `${this.name} is ${age}`;
}

console.log(sayHi.call(person, 21));
console.log(sayHi.bind(person, 21));

function sayHi() {
  return (() => 0)();
}
console.log(typeof sayHi());

const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);

let b = [
  [0, 1],
  [2, 3],
].reduce(
  (acc, cur) => {
    console.log(acc, cur, "jjpp");
    return acc.concat(cur);
  },
  [1, 2]
);

console.log(b);

// setInterval(() => console.log("Hi"), 1000);

// Store the ID returned by setInterval
const intervalId = setInterval(() => console.log("Hi"), 1000);

// You can now use intervalId to reference the interval
console.log("Interval ID:", intervalId);

clearInterval(intervalId);

function* generator(i) {
  yield i;
  yield i * 2;
}

const gen = generator(10);

console.log(gen.next().value);
console.log(gen.next().value);

const firstPromise = new Promise((res, rej) => {
  setTimeout(res, 500, "one");
});

const secondpromise = new Promise((res, rej) => {
  setTimeout(res, 1000, "two");
});

Promise.race([firstPromise, secondpromise]).then((res) => console.log(res));

const person1 = {
  name: "Lydia",
  age: 21,
};

for (const item in person1) {
  console.log(item);
}

const num = parseInt("7*6", 10);
let num3 = [1, 2, 3].map((num) => {
  if (typeof num === "number") return;
  return num * 2;
});

console.log(num3);

function getInfo(member, year) {
  member.name = "Lydia";
  year = "1998";
}

const persons = { name: "Sarah" };
const birthYear = "1997";

getInfo(persons, birthYear);

console.log(persons, birthYear);

let personq = { name: "Lydia" };
const members = [personq];
personq = null;

console.log(members, personq);

function greeting() {
  throw "Hello world!";
}

function sayHi() {
  try {
    const data = greeting();
    console.log("It worked!", data);
  } catch (e) {
    console.log("Oh no an error:", e);
  }
}

sayHi();

function Car() {
  this.make = "Lamborghini";
  return { make: "Maserati" };
}

const myCar = new Car();
console.log(myCar.make);

// (() => {
//   let x = (y = 10);
// })();

// console.log(typeof x);
// console.log(typeof y);

class Dog {
  constructor(name) {
    this.name = name;
  }
}

Dog.prototype.bark = function () {
  console.log(`Woof I am ${this.name}`);
};

const pet = new Dog("Mara");

pet.bark();

delete Dog.prototype.bark;

// pet.bark();

// const set = new Set([1, 1, 2, 3, 4]);
const set = new Set([{ e: 1 }, { e: 1 }, { e: 2 }]);

console.log(set);

const name = "Lydia";
age = 21;

console.log(delete name);
console.log(delete age);

const umbers = [1, 2, 3, 4, 5];
const [y] = umbers;

console.log(y);

const perso = { name: "Lydia" };

Object.defineProperty(perso, "age", { value: 21 });

console.log(perso);
console.log(Object.keys(perso));

[1, 2, 3, 4].reduce((x, y) => console.log(x, y));
// // index.js
// console.log("running index.js");
// import { sum } from "./sum.js";
// console.log(sum(1, 2));

// // sum.js
// console.log("running sum.js");
// export const sum = (a, b) => a + b;

async function getData() {
  return await Promise.resolve("I made it!");
}

const data = getData().then((res) => console.log(res));
console.log(data);

function addToList(item, list) {
  return list.push(item);
}

const result = addToList("apple", ["banana"]);
console.log(result);

const box = { x: 10, y: 20 };

Object.freeze(box);

const shape = box;
shape.x = 100;

console.log(shape);
const add = () => {
  const cache = {};
  return (num) => {
    if (num in cache) {
      return `From cache! ${cache[num]}`;
    } else {
      const result = num + 10;
      cache[num] = result;
      return `Calculated! ${result}`;
    }
  };
};

const addFunction = add();
console.log(addFunction(10));
console.log(addFunction(10));
console.log(addFunction(5 * 2));

const myLifeSummedUp = ["☕", "💻", "🍷", "🍫"];

for (let item in myLifeSummedUp) {
  console.log(item);
}

for (let item of myLifeSummedUp) {
  console.log(item);
}

const list = [1 + 2, 1 * 2, 1 / 2];
console.log(list);

var status = "😎";

setTimeout(() => {
  const status = "😍";

  const data = {
    status: "🥑",
    getStatus() {
      return this.status;
    },
  };

  console.log(data.getStatus());
  console.log(data.getStatus.call(this));
}, 0);

console.log("I want pizza"[1]);

class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person("John");
console.log(typeof member);

let newList = [1, 2, 3].push(4);

console.log(newList, "kpp");

function giveLydiaPizza() {
  return "Here is pizza!";
}

const giveLydiaChocolate = () =>
  "Here's chocolate... now go hit the gym already.";

console.log(giveLydiaPizza.prototype);
console.log(giveLydiaChocolate.prototype);

const personh = {
  name: "Lydia",
  age: 21,
  k: 0,
};

for (const [x, y] of Object.entries(personh)) {
  console.log(x, y);
}

// const name = "Lydia";

// console.log(name());

const myPromise = () => Promise.resolve("I have resolved!");

function firstFunction() {
  myPromise().then((res) => console.log(res));
  console.log("second");
}

async function secondFunction() {
  console.log(await myPromise());
  console.log("second");
}

firstFunction();
secondFunction();

const setc = new Set();

set.add(1);
set.add("Lydia");
set.add({ name: "Lydia" });

for (let item of setc) {
  console.log(item + 2, "kkooooopp");
}

const emojis = ["✨", "🥑", "😍"];

emojis.map((x) => x + "✨");
emojis.filter((x) => x !== "🥑");
emojis.find((x) => x !== "🥑");
emojis.reduce((acc, cur) => acc + "✨");
emojis.slice(1, 2, "✨");
emojis.splice(1, 2, "✨");

// Stringifying a number into valid JSON, then parsing the JSON string to a JavaScript value:
const jsonNumber = JSON.stringify(4); // '4'
JSON.parse(jsonNumber); // 4

// Stringifying an array value into valid JSON, then parsing the JSON string to a JavaScript value:
// const jsonArray = JSON.stringify([1, 2, 3]); // '[1, 2, 3]'
JSON.parse(jsonArray); // [1, 2, 3]

// Stringifying an object  into valid JSON, then parsing the JSON string to a JavaScript value:
// const jsonArray = JSON.stringify({ name: "Lydia" }); // '{"name":"Lydia"}'
JSON.parse(jsonArray); // { name: 'Lydia' }

let nameh = "Lydia";

function getName() {
  console.log(name);
  let name = "Sarah";
}

getName();