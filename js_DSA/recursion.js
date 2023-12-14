function fun(arr, n){
if(n==0) return -1;
console.log(arr[n-1]);
return fun(arr, n-1);
}

// fun([1, 2, 3, 4, 5, 6], 6);
let n=10;
console.log(n--);
let m= 10;
console.log(--m)
let r = 6;
console.log(r--);