function addupToSimple(n: number) {
  let total = 0;
  for (let i = 0; i < n; i++) {
    total += 1;
  }
  return total;
}

// O(n)

function addUpComplex(n: number) {
  return (n * (n + 1)) / 2;
}

// O(1);

function printUpAndDown(n: number) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  for (let j = n - 1; j > 0; j--) {
    console.log(j);
  }
}
// O(2n)

function printAllPairs(n: number) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

// O(n^2)
// const person = { name: "John", age: 22, hobbies: ["reading", "sleeping"] };

// Object.keys(person); // ["name", "age", "hobbies"]
// Object.values(person); // ["John", 22, ["reading", "sleeping"]]
// Object.entries(person); // [["name", "John"], ["age", 22], ["hobbies", ["reading", "sleeping"]]]
// person.hasOwnProperty("name"); // true

// what happens internally
// ChatGPT
// ChatGPT
// Internally, when you call these methods on the person object:

// Object.keys(person): This method iterates over the properties of the person object and returns an array containing the keys (property names) of the object. In this case, it returns ["name", "age", "hobbies"].
// Object.values(person): Similarly, this method iterates over the properties of the person object and returns an array containing the values of those properties. In this case, it returns ["John", 22, ["reading", "sleeping"]].
// Object.entries(person): This method iterates over the properties of the person object and returns an array containing arrays of key-value pairs. Each inner array has two elements, the first being the property key and the second being the corresponding value. In this case, it returns [["name", "John"], ["age", 22], ["hobbies", ["reading", "sleeping"]]].
// person.hasOwnProperty("name"): This method checks whether the person object (or its prototype chain) has a property with the name "name". In this case, it returns true because the person object has a property named "name".
const array = [1, 2, 3, 4, 5];

console.time("push");
array.push(6);
console.timeEnd("push"); // takes a very small amount of time

console.time("unshift");
array.unshift(0);
console.timeEnd("unshift"); // takes a longer amount of time
