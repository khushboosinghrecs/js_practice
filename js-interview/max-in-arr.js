function maxinarr(arr){
//     let mx=0;
// for(let i=0; i<arr.length; i++){
// if(arr[i]>0){
//     mx=arr[i];
// }
// }
// return mx;
 return Math.max(...arr);
}
console.log(maxinarr([1, 2, 3, 1, 2, 3, 4]));

function maxinnested(arr){
    let mx= arr[0][0];
    for(let ar of arr){
        for(let num of ar){
            if (num> mx) mx=num;
        }
    }
    return mx;

}

console.log(maxinnested([[1, 4, 5], [8, 9, 10]]))