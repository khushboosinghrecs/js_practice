// this key word (implement);

this.a = 5;
console.log(this.a);

// this define for which the context it currently in
function getParam(){
    console.log(this.a)
}

getParam();

const getPara = ()=>{
    console.log(this.a);
}
getPara();
let data = {
    name: "Khushi",
    age : 24,
    showage(){
        console.log(this.age);
    },
    getAge :()=>{
        console.log(this.age);
    }
}

data.showage();
data.getAge();
let name = "Manisha";
let user = {
    name: "Khushi",
    age : 24,
    childObj :{
        newName : "Namaste js",
        getDetails (){
            console.log(this.name, this.newName)
        }
    },
    getName :()=>{
        console.log(this.name);
    }
}
// normal function only point to immediate parent so => this will point to immediate object
// arrow function point to parent object
user.childObj.getDetails();
// 

class student {
    constructor(n){
        this.name = n;
    }

    getName(){
        console.log(this.name);
    }
}

const Student = new student('pksskpkpsksp');
Student.getName();