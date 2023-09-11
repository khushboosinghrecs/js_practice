//map, filter and reduce

const arr = [5,10,15, 20];
const multiplyThree = arr.map((num, i)=>{
    return num*3 * i;
})

console.log(multiplyThree);
console.log(arr);

// filter

const filterarr = arr.filter((num )=>{
    return num >2;
})

console.log(filterarr)

//reduce

const reducearr = arr.reduce((acc, curr, i, arr)=>{
return acc+ curr;
}, 0)

console.log(reducearr);

//pollyfill for map();
//Array.map(()=>{})

Array.prototype.myMap = function(cb){
let temp = [];
for(let i=0; i< this.length; i++){
    temp.push (cb(this[i]));
}
return temp;
}

const myMapPollyfil = arr.myMap((num)=>{
    return num*5
})
console.log(myMapPollyfil)
console.log(arr);

//pollyfill for filter
//Array.filter(()=>{})

Array.prototype.mfFilter = function(cb){
    let temp = [];
    for(let i=0; i<this.length ; i++){
        if(cb(this[i])) temp.push(this[i]);
        // temp.push(cb(this[i]));
    }
return temp;
}

const myFilterArr = arr.mfFilter((num)=>{
    return num >10
})

console.log(myFilterArr);

//polyfill reduce

Array.prototype.myReduce= function (cb, initialvalue){
    let accumulator = initialvalue;

    for(let i=0; i<this.length; i++){
        accumulator = accumulator ? cb(accumulator, this[i], i, this): this[i];
    }
    return accumulator;
}


const sum = arr.myReduce((acc, curr)=>{
    return acc + curr;
})
console.log(sum);

// ques map vs arr;

const mapResult = arr.map((num)=>{
    return num +2
})

// const forEachResult = arr.forEach((num)=>{
//  num +2
// })


// ques map filter and reduce - o/p based questions
// question 1=> return only name of students in Capital
// question 1=> return only name of students scored more than 60
// question 1=> return only name of students scored more than 60 and rollnumber >10
// question 1=> sum of marks
// question => name of stuedent whosw marks > 60
// question => return total marks for students with marks greater than 60 after 20
                // marks have been added to those who scored less than 60

let students = [
    {name: "Piyush", rollnum: 11, marks : 50},
    {name: "Kiyush", rollnum: 10, marks : 670},
    {name: "riyush", rollnum: 15, marks : 70},
    {name: "Niyush", rollnum: 16, marks : 60},
    {name: "Tiyush", rollnum: 10, marks : 150},
]

let name = students.map((studen)=> {
//    return studen.name.slice(0, 1);
   return studen.name.toUpperCase();
})

let score = students.filter((student)=>{
return student.marks>60;
})

let studentRol = students.filter((ele)=>{
    return ele.marks>60 && ele.rollnum >10;
})

let sumMarks = students.reduce((acc, curr)=>{
    return acc + curr.marks;
}, 0)

let names = students.filter(ele => ele.marks> 60).map(ele => ele.name);
let marksadded = students.map((ele)=>{
if(ele.marks<60){
    ele.marks += 20;
}
return ele;
}).filter( ele => ele.marks> 75).reduce((acc, ele)=>{
    return acc + ele.marks;
}, 0)

console.log(name);
console.log(score);
console.log(studentRol);
console.log(sumMarks);
console.log(names);
console.log(marksadded);