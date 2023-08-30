cleanNames = [" avengers", "   captain_america", "ironman   ", " black panther   "];
let arr = cleanNames.map(ele => ele.trim());
console.log(arr);

let miles = [1, 2,3 , 4 ,5];
let km = miles.map(ele => ele*1.69);
console.log(km);

let nums = [25, 45, 55, 77, 88, 99];
let square = nums.map(ele => ele*ele);
let average = square.reduce((acc, cur) =>{
console.log(acc,cur )
 return acc + cur}, 0);

 let numbers = [4, -4, 10, 203, 53, 11];
let numplufr = numbers.map(num=>num+4);
console.log(numplufr);

const heros = [
    { name: 'Spider-Man' },
    { name: 'Thor' },
    { name: 'Black Panther' },
    { name: 'Captain Marvel' },
    { name: 'Silver Surfer' }
  ];

  const heroschnge = heros.map((hero, id)=>{
    return {id: id, hero: hero.name}
  })

  console.log(heroschnge);

  const inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
const filterinpuWords = inputWords.filter(ele => ele.length> 6);
console.log(filterinpuWords);

myColor = ["Red", "Green", "White", "Black"];
console.log(myColor);
console.log(myColor.toString());
console.log(JSON.stringify(myColor))
// console.log(myColor.join());
console.log(myColor.join('+'));

//Array Methods

//foreach
const months = ['January', 'February', 'March', 'April'];

months.forEach(function(month, index, array) {
  console.log(month, index, array);
});
//map

const users = [
  {
    first_name: 'Mike',
    location: 'London'
  },
  {
    first_name: 'Tim',
    location: 'US'
  },
  {
    first_name: 'John',
    location: 'Australia'
  }
];

const usersList = users.map(function (user) {
  return `${user.first_name} lives in ${user.location}`;
});

console.log(usersList); 

//find
const employees = [
  { name: "David Carlson", age: 30 },
  { name: "John Cena", age: 34 },
  { name: "Mike Sheridan", age: 25 },
  { name: "John Carte", age: 50 }
 ];
const employee = employees.find(emp=>emp.name.indexOf('John')> -1);
console.log(employee);

//findIndex
const employeeindex = employees.findIndex(emp=> emp.name.indexOf('Mike') >-1);
console.log(employeeindex);


//filter 

const filterJohn = employees.filter(emp => emp.name.indexOf('John') > -1);
console.log(filterJohn)

//every
let posnumbers = [10, -30, 20, 50];
let allposnum = posnumbers.every(ele => ele>0);
console.log(allposnum);

let posnum=  [10, 30, 20, 50];
let allposnumm = posnum.every(num => num>0);
console.log(allposnumm)

//some 
let atleastposnum = posnumbers.some(ele => ele>0);
console.log(atleastposnum);
let atleastallposnumm = posnum.some(ele => ele>0);
console.log(atleastallposnumm);

//reduce
const coordinates = [
  { x: 1, y: 2 }, 
  { x: 2, y: 3 }, 
  { x: 3, y: 4 }
];

const sum = coordinates.reduce((accumulator, currentValue) =>{ 
    return accumulator + currentValue.x;
}, 0);

console.log(sum);

//slice 
let array = [1, 2, 3, 'hello world', 4.12, true];
let newarray = array.slice(1, 2);
console.log(array, newarray);

let kl = [0, 9 , 8]
array.splice(2, 2, 'abc', ...kl);
console.log(array);

//split

let mystr = array.toString();
console.log(mystr);
console.log(mystr.split(",", 4))




let objArr = [{x:1}, {y:2}, {z:3}, {x:-1}];
let result = {};
let abc={x:1};
for(let x in abc){
    console.log(x);
}
for (let obj of objArr) {
    console.log(obj)
  for (let key in obj) {
      console.log(key)
    if (result.hasOwnProperty(key)) {
      result[key] += obj[key];
    } else {
      result[key] = obj[key];
    }
  }
}
console.log(result);


// Adding custom map method to the Array prototype
Array.prototype.customMap = function(callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }

  return result;
};

// Adding custom filter method to the Array prototype
const numbers = [1, 2, 3, 4, 5];
Array.prototype.customFilter = function(callback) {
  const result = [];
  console.log(this, "custom prototype")

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      result.push(this[i]);
    }
  }

  return result;
};
const evenNumbers = numbers.customFilter((num) => num <2);
console.log(evenNumbers)
// Example usage


const squaredNumbers = numbers.customMap((num) => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

; // Output: [2, 4]

function one() {
  return 1;
}

function two() {
  return 2;
}

function plus(num) {
  return {
    operator: "+",
    num,
  };
}

function minus(num) {
  return {
    operator: "-",
    num,
  };
}

function Two(obj) {
  return eval(`2 ${obj.operator} ${obj.num}`);
}

function One(obj) {
  return eval(`1 ${obj.operator} ${obj.num}`);
}

console.log(Two(plus(one())));
console.log(One(plus(two())));
console.log(Two(minus(one())));

const abc= ['a', 'b', 'c', 'd', 'e']
console.log(abc);
console.log([...abc], 'hjhh');
console.log(...abc, 'jjjj');
let p = "jjj"
let a =[...abc].map(e=> `${e} / ${p}`);
console.log(abc, a)
