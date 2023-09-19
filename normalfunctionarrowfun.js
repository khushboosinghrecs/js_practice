// In JavaScript, there are two primary ways to define functions: normal functions (also known as regular functions) and arrow functions. These two types of functions have some differences in behavior and syntax:

// **Normal Function:**
// A normal function in JavaScript is defined using the `function` keyword. Here's the basic syntax:


function add(a, b) {
  return a + b;
}


// Key characteristics of normal functions:

// 1. **`this` Binding:** Normal functions have their own `this` binding, which is determined by how the function is called. The value of `this` depends on the context in which the function is invoked.

// 2. **Arguments Object:** Normal functions have an `arguments` object, which is an array-like object containing all the arguments passed to the function.

// 3. **Cannot Be Used as Constructors:** Normal functions can be used with the `new` keyword to create instances, making them constructor functions.

// **Arrow Function:**
// An arrow function in JavaScript is defined using the `=>` arrow notation. Here's the basic syntax:

const add = (a, b) => a + b;

~
// Key characteristics of arrow functions:

// 1. **`this` Binding:** Arrow functions do not have their own `this` binding. Instead, they inherit the `this` value from the surrounding lexical (enclosing) context.

// 2. **No `arguments` Object:** Arrow functions do not have their own `arguments` object. If you need to access arguments, you can use the rest parameters syntax.

// 3. **Cannot Be Used as Constructors:** Arrow functions cannot be used with the `new` keyword to create instances. They are not suitable for defining constructor functions.

// Here's a quick comparison:

function regularFunction() {
  console.log(this);
}

const arrowFunction = () => {
  console.log(this);
}

const obj = {
  regularFunction: regularFunction,
  arrowFunction: arrowFunction,
};

obj.regularFunction(); // 'this' refers to 'obj'
obj.arrowFunction();   // 'this' inherits from the lexical context (likely 'window' or 'undefined' in a browser)

// In summary, normal functions and arrow functions have different behavior, especially regarding their `this` binding and handling of arguments. The choice between them depends on your specific use case and the behavior you require for your functions.