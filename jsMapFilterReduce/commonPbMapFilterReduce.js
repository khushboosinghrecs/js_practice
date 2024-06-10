// Extract a property from objects:

function extractProperty(){
    let arr = [{name: 'Alice'}, {name: 'Bob'}, {name: 'Charlie'}];
    let res = arr.map(obj => obj.name)
    console.log(res);
}

// Convert prices:
function convertPrices(){
    let arr = [10, 20, 30];
    let convsionRate = 0.83;
    let res = arr.map(price => price*convertPrices);
    console.log(res);
}

// Reverse strings:
function ReverseStr(){
    let arr = ["apple", "banana", "cherry"];
    let res = arr.map(str=> str.split('').reverse().join(''));
    console.log(res);
}
// Add a calculated property:
function addCalculated(){
    let arr = [{a: 1, b: 2}, {a: 3, b: 4}];
    let res = arr.map(obj=> ({...obj, sum: obj.a +obj.b}))
    console.log(res);
}
addCalculated();

// Convert sentences to arrays of words:
function convertSentence(){
    let arr = ['Hello world', 'javascript is fun'];
    let res = arr.map(sent=> sent.split(''));
    console.log(res);
}
convertSentence();

// Square even and cube odd numbers:

function suquareEventOdd(){
    let arr = [1,2,3, 4,5];
    let res = arr.map(x => x%2 ===0 ? x*x : x*x*x);
    console.log(res);
}
suquareEventOdd();

// String lengths in objects:
function stringLength(){
    let arr = ['apple', 'banana'];
    let res = arr.map(str=> ({str, length:str.length}));
    console.log(res);
}
stringLength();

// Get ages from birth years:
function birthAges(){
    let arr =  [2000, 1990, 1985];
    let currentyear = 2024;
    let res  = arr.map(year=> currentyear-year);
    console.log(res);
}

// Uppercase first and last letter:

function UppercasefirstLast(){
    let arr = ["apple", "banana"];
    let res = arr.map(str=> str.charAt(0).toUpperCase() + str.slice(1, -1) + str.slice(-1).toUpperCase());
    console.log(res);
}
UppercasefirstLast();

// Objects with property greater than a value:
function objectwithgreaterval(){
    let arr = [{a: 1}, {a: 10}, {a: 5}];
    let res = arr.filter(obj => obj.a > 5);
    console.log(res);
}

// Strings starting and ending with the same letter:
function stringstartAndendWithSameletter(){
    let arr = ["radar", "hello", "level"];
    let res = arr.filter(str => str.charAt(0) === str.charAt(str.length - 1));
    console.log(res);
}
stringstartAndendWithSameletter();

// Filter objects based on nested properties:
function filterobjwithNestedProp(){
    let arr = [{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}];
    let res = arr.filter(obj => obj.a.b > 1);
    console.log(result);
}

// Numbers that are prime and greater than 10:
function findPrime(){
    let arr = [1, 2, 3, 21, 17, 19];
    let isPrime= num => {
        if(num <=1) return false;
        for(let i=0; i<=Math.sqrt(num); i++){
            if(num % i==0) return false;
        }

        return true;
    }

    let res = arr.filter(x => isPrime(x) && x>10);
    console.log(res);
}

// Numbers with even digit sums:
function numWithEvenDigitSum(){
    const arr = [12,14, 56, 76];
    const digitSum =(num)=>{
        let sum = 0;
        while(num){
            num = num%10;
            sum = sum + num;
            num = Math.floor(num / 10);
        }
        console.log(sum, 'summm')
        return sum%2 ===0;
    
    }   

    let res = arr.filter(digitSum)
    console.log(res);
}

numWithEvenDigitSum();
