// console.log(n, square, square2, square4);

// var n = 2;
// function square(num) {
// var ans = num * num;
// return ans;
// }
// var square2 = square(n);
// var square4 = square(4);

// var x = 1;
// a();
// b(); // we are calling the functions before defining them. This will work
// // properly, as seen in Hoisting.
// console.log(x);
// function a() {
// var x = 10; // local scope because of separate execution context
// console.log(x);
// }
// function b() {
// var x = 100;
// console.log(x);
// }

// function a() {
// console.log(b); // 10
// // Instead of printing undefined it prints 10, So somehow this a
// //function could access the variable b outside the function scope.
// }
// var b = 10;
// a();

console.log(window.x);
a=10;
console.log(window.a); // ReferenceError: Cannot access 'a' before initialization
console.log(b); // prints undefined as expected
let a = 10;
console.log(a); // 10
var b = 15;
console.log(window.a); // undefined
console.log(window.b);

const c = 100;
function x() {
const c = 10;
console.log(c); // 10
    function z(){
        console.log(c);
    }
        z();

}
x();
console.log(c);
