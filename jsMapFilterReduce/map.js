// Multiply each number by 2:

function multiplyByTwo() {
    let arr = [1, 2, 3, 4, 5];
    const mul = (arr) => {
      return arr.map(ele =>  ele === 2 ? ele*5 : ele*2)
    }
    console.log(mul(arr));
  }
multiplyByTwo();

// Convert strings to uppercase:

function converStringToUpperCase(){
    let arr =['hell', 'world']
    let res = arr.map(ele=> ele.toUpperCase());
    console.log(res);
}
converStringToUpperCase();

// Extract first letter of each string:

function extractFirstLetter(){
    let arr = ["apple", "banana", "cherry"];
    let res = arr.map(ele=> ele.charAt(0));
    console.log(res);
}
extractFirstLetter();


function upperCaseFirstLetter(){
    let arr = ["apple banaa hi Mondio Jdhohdoi ", "banana", "cherry"];
    let res = arr.map(ele=> ele.charAt(0).toUpperCase() + ele.slice(1));
    console.log(res);
}
upperCaseFirstLetter();

function upperCaseFirstLetterSentences() {
    let arr = ["apple banaa hi Mondio Jdhohdoi", "banana", "cherry"];
    let res = arr.map(sentence => {
        return sentence.split(' ').map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ');
    });
    console.log(res);
}
upperCaseFirstLetterSentences();

// Square roots of numbers:

function squareRoot(){
    let arr =[1, 4, 9, 16, 25];
    let res = arr.map(ele=> Math.sqrt(ele));
    console.log(res);
}
squareRoot();

// Add a fixed number (e.g., 5) to each element:
function addNum(){
    let arr = [1, 2, 3 , 4];
    let res = arr.map(ele => ele +4);
    console.log(res);
}
addNum();

// Lengths of strings:
function findLength(){
    let arr = ["apple", "banana", "cherry"];
    function sum(ele){
        console.log( "10"+ele);
    }
  arr.map(str=> sum(str));
}
findLength();

// Subtract a fixed number (e.g., 3) from each element:
function subtractFixedNum(){
    let arr = [10, 20, 30];
    let res = arr.map(ele=> ele -5);
    console.log(res);
}
subtractFixedNum();

// Concatenate a fixed string (e.g., " Hello"):

function ConcatenateStr(){
     let arr = ["Alice", "Bob"];
     let result = arr.map(str => str + 'hello');

     console.log(result);
}
ConcatenateStr();

// Convert Celsius to Fahrenheit:
function celciusToFarenheight(){
    let arr = [1, 2, 5];
    let result = arr.map(ele => ele*9/5 + 32 );
    console.log(result);
}

celciusToFarenheight();

// Absolute values:

function absoluteDifference(){
    let arr = [-1, -2, 3];
    let res = arr.map(ele => Math.abs(ele));
    console.log(arr);
}
absoluteDifference();

// Negations of boolean values:

function negationBoolVal(){
    // let arr = [true, false, true];
    let arr = [0, 1, 0];
    let res = arr.map(ele => !ele);
    console.log(res);
}
negationBoolVal();

// Convert date strings to Date objects:
function dateToString(){
    let arr = ["2023-01-01", "2023-12-31"];
    let res = arr.map(date=> new Date(date));
    console.log(res);
}
dateToString();
// Capitalize the first letter:

function capitalize(){
    let arr = ["apple", "banana"];
   let res= arr.map(ele=>ele.charAt(0).toUpperCase() + ele.slice(1));
   console.log(res);
}
capitalize();

// Convert names to initials:
function convertToinitials(){
    let arr = ["Alice Smith", "Bob Johnson"];
    let res = arr.map(name => name.split(' ').map(ele=> ele.charAt(0)).join(''))
    console.log(res);
}
convertToinitials()

// Double and add a fixed number (e.g., 3):

function doubleFix(){
    let arr =[1, 2, 3];
    let res = arr.map(x=> x*2 + 3);
    console.log(res);
}

doubleFix();