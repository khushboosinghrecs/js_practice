// currying f(a, b) into f(a)(b) => converts number of arguments to number of function

function f(a){
    return function(b){
        return `${a} ${b}`
    }
}
console.log(f(2)(5));

// why curring?
// que = sum(2)(6)(1);

function sum(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}
console.log(sum(1)(3)(9));
function evaluate(operation){
return function(a){
    return function(b){
       if(operation =="add") return a+b;
      else if(operation =="multiply") return a*b;
      else if(operation =="divide") return a / b;
      else if(operation =="sub") return a - b;
      else return "invalid operation";
    }
}
}

console.log(evaluate('sum')(4)(5))

// infinite currying => sum(1)(2)(3)(4).....(n)

function add(a){
    return function(b){
       if(b) return add(a+b);
       return a;
    }
}

console.log(add(2)(3)(5)(7)());

// difference b/w currying vs partial application 

function sums(a){
    return function(b, c){
        return a+b+c;
    }
}

const x = sums(10);
console.log(x(5, 6));
// or
console.log(sums(20)(1, 4));

//ques manipulation of dom

function updateElementText(id){
    return function(content){
        document.querySelector('#' +id).textContent =content
    }
}

const updateHeader = updateElementText("heading");
updateHeader("hello js jsh jsh");
// ************

function curry(fun) {
    return function curriedFun(...args) {
        if (args.length >= fun.length) {
            return fun(...args);
        } else {
            return function (...next) {
                return curriedFun(...args, ...next)
            }
        }
    }
}

const sum = (a, b, c, d) => a+b+c+d;

const totalSum = curry(sum);
console.log(totalSum(1)(6)(5)(6));


// curry.js
function curry(x) {
    let sum = x || 0;
  
    function inner(y) {
      if (y === undefined) {
        return sum;
      }
      sum += y;
      return inner;
    }
  
    // __define-ocg__ Return sum directly when no arguments are provided
    return x === undefined ? sum : inner;
  }
  
  