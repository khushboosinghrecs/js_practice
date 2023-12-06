let arr= [1, 2, 3, 4, 5, 6, 7 , 8];
let k= 3;
let n= arr.length;
let brr = []

for(let i=0; i<arr.length; i++){
    brr[(i+k)%n] = arr[i];
    console.log((i+k)%n, "hello ", i);
}
for(let i=0; i<brr.length; i++){
    console.log(brr[i]);
}