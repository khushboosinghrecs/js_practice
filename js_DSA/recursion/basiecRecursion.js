function printName(n){

    if(n===0) return ;
    console.log('khushi', n);
    printName(n-1);
    console.log('khushi', n);

}
printName(5); // prints "khushi" 5 times.

function printSum(n){
    if(n===0) return 0;

    return n+printSum(n-1);
    return n*printName(n-1)
}
console.log(printSum(5));

function factorialnum(n){
    if(n===0) return 1;

    return n*factorialnum(n-1);
}

console.log(factorialnum(6));

function reverseArr(arr, start, end){
   let ans = [];
 if(start<end){
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    reverseArr(arr, start+1, end-1)
 }
   return arr;
}

console.log(reverseArr([1, 4, 5, 3, 4],0, 4));

function isPalindrome(str, start, end) {
    // Base case: when start is greater than or equal to end, substring is a palindrome
    if (start >= end) {
        return true;
    }

    // If characters at start and end don't match, it's not a palindrome
    if (str[start] !== str[end]) {
        return false;
    }

    // Recursively check the substring excluding start and end characters
    return isPalindrome(str, start + 1, end - 1);
}

console.log(isPalindrome('abuba', 0, 4))


function fibbonacci(n){
    if(n<=1) return n;

    return fibbonacci(n-1) + fibbonacci(n-2)
}