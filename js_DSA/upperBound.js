function firstInd(arr, target) {
    let l = 0;
    let right = arr.length ;
    let result = -1;
    while (l <= right) {
        let mid = Math.floor((l + right) / 2);
        if (arr[mid] == target) {
            result = mid;
            console.log(mid, l, right, 'Khush')
            right = mid - 1;
        }
        else if (arr[mid] < target) l = mid + 1;
        else right = mid - 1;
    }

    return result;
}
function rightInd(arr, k){
    let left = 0; 
    let right = arr.length;
    let res= -1;

    while(left<=right){
        let mid= Math.floor((left +right)/2);
        if(arr[mid]==k) {res = mid; left = mid+1 }
        else if(arr[mid]<k)  left = mid +1;
        else right = mid -1;

    }
    return res;

}
let arr= [1,2,3, 3, 3 ,4, 5 , 6];
console.log(firstInd(arr, 3 ))
console.log(rightInd(arr, 3 ))