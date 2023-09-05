console.log("I");

setTimeout(() => {
  console.log("love")
}, 0);

console.log("JavaScript!"); 



var obj;
console.log(obj)




let bear = {
  sound: "roar",
  roar(){
    console.log(this.sound);
  }
}

bear.sound = "grunt";
let bearSound = bear.roar;
bearSound(); 



const a = { x: 1 };
const b = { x: 1 }; 
console.log(a===b);
console.log(a.x == b.x)


const obj = {
  a: 1,
  b: 2,
  c: 3,
};

const obj2 = {
  ...obj,
  a: 0,
};

console.log(obj2.a, obj2.b); 



const obj1 = {
  a: 1,
  b: 2,
  c: 3,
};

const obj3 = {
  ...obj1,
  a: 0,
};

console.log(obj2.a, obj3.b); 
