// Return only even numbers:

function evenNum(){
    let arr = [ 1, 2, 3, 4, 5, 6];

    let res = arr.filter(x => x%2 ===0)
    let res2 = arr.map(x => x%2 ===0)

    console.log(res, res2);
}
evenNum()

// Strings with at least 5 characters:
function stringWithChar(){
    let arr = ["apple", "hi", "world", "yes"];
    let res = arr.filter(str=> str.length>=5);
    console.log(res);
}
stringWithChar();

// Numbers greater than 10:
function numGreaterThan10(){
    let arr = [2, 3, 4, 20];
    let res = arr.filter(ele => ele>10);
    console.log(res);
}

numGreaterThan10();

// Strings containing 'a':

function stringContainingA(){
    let arr = ["apple", "banana", "cherry", "date"];
    let res = arr.filter(str => str.includes('a'));
    console.log(res);
}

stringContainingA();

// prime number

function primeNumber(){
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let isPrime = (num)=>{
        if(num <=1) return false;
        for(let i=2; i<=Math.sqrt(num); i++){
            if(num %i ===0) return false;
        }
        return true;
    }
   let res = arr.filter(isPrime);
   console.log(res);
}
primeNumber();

// Objects with a specific property:

function arrObj(){
    let arr = [{a: 1}, {b: 2}, {a: 3, b: 4}];
    let res = arr.filter(obj => 'b' in obj);
    console.log(res);
}
arrObj();

// perfect square

function perfectSquare(){
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let res = arr.filter(ele=> Number.isInteger(Math.sqrt(ele)));
    console.log(res);
}
perfectSquare();

// starting with 'A'

function startWithA(){
    let arr = ["Alice", "aob", "Andrew", "Charlie"];
    let res = arr.filter(words=> words.toLowerCase().startsWith('a')).map(ele=> ele.charAt(0).toLowerCase()+ ele.slice(1));
    console.log(res);
}
startWithA();

// Filter out negative numbers:

function negativeNum(){
    let arr = [-10, -5, 0, 5, 10];
    let res = arr.filter(ele=> ele>0);
    console.log(res);
}
negativeNum();

// filter out negative numbers

function ageGreater18(){
    let arr = [16, 18, 20, 14, 22];
    let res = arr.filter(num => num>18);
    console.log(res);
}
ageGreater18();

// pallindromic string

function pallindromicString(){
    let arr = ["madam", "hello", "racecar", "world"];
    let res = arr.filter(ele=> ele.split('').reverse().join('') === ele)
    console.log(res);
}
pallindromicString()