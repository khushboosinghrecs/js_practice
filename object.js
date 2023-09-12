// object in js => collection of 

const user = {
    name : "Khushi",
    age: 24, 
    "like this viedeo": true
}
user.name = " Piyush"
delete user.age;
console.log(user["like this viedeo"]);
delete user["like this viedeo"]

const func = (function(a){
    delete a;
    return a;
})(5)

// add dynamic key value pair to object
const property = "first name";
const name = "Khushboo Singh"

const user = {
    // property : name
    [property] : name
}
console.log(user);


// loop obj show key
const users={
    name: "Roadside Coader",
    age: 24,
    isTotallyAwesome: true
}


for(key in users){
    // console.log(key)
    console.log(users[key])
}

//output

const obj = {
    a: 100,
    b: 200,
    a: 800
}
console.log(obj);
// que create a function multiplybyTwo(obj) that multiplies all numeric values of nums by 2;


let nums ={
    a: 100,
    b: 200,
    title: "My num",
}

function multiplyByTwo(obj){
    for(key in obj){
        if(typeof obj[key] == "number"){
            obj[key] *=2;
        }
    }
}
multiplyByTwo(nums);
console.log(nums);

const a = {};
const b = {key : "b"};
const c = {key : "c"};

// a["[object object]"] = 123;
// a["[object object]"] = 456;
a[b] = 123;
a[c] = 465;

console.log(a[b]);

//json.stringify and json.parse

const user ={
name : "Khushi",
age : 24
}

const strObj = JSON.stringify(user); //use => storing in local storage //
const strObj2 = JSON.stringify(user, ['name', 'health'])
localStorage.setItem('test', user);
console.log(JSON.parse(localStorage.getItem('test')))


console.log(strObj);
console.log(JSON.parse(strObj));

// spread operator

console.log(..."khushi");
//  k h u s h i

console.log({..."khushi"});
// {0: 'k', 1: 'h', 2: 'u', 3: 's', 4: 'h', 5: 'i'}

console.log([..."khushi"]);
//  (6) ['k', 'h', 'u', 's', 'h', 'i']

const user = {name: "Lydia", age : 21, fullName: "K Singh", addr:{
    state: 'up',
    district: 'vns'
}};
const admin = {admin: true, ...user};
console.log(admin);

const shape = {
    radius : 10,
    diameter(){
        return this.radius *2;
    },

    perimeter : ()=> 2*Math.PI * this.radius
}

// normal function is bind to from which object being it called, arrow funciton not
console.log(shape.diameter());
console.log(shape.perimeter());

//destructure => taking out values from object

const {  } = admin;
console.log(admin);

const {addr:{state}} = user;
console.log(state);

let e = {greet: "Heey"}
let d ;
d= e;
e.greet ="hi hi"
console.log(d.greet) // same value bcs d will point to e reference

console.log({a:1} == {a:1}); // false
console.log({a: 1} === {a: 1}); // false both obj are point to different memory object

