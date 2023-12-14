// function binarySearch(target) {
//     var arr = [1, 2, 3, 4, 5];
//     let left = 0;
//     let right = arr.length - 1;
//     while (left <= right) {
//         let mid = left + (right - left) / 2;
//         if (arr[mid] === target) return arr[mid];
//         if (target > arr[mid]) left = mid + 1;
//         else right = mid - 1;
//     }
// }
// console.log(binarySearch(3));



function binarySearch(arr, left, right, k) {
    if (left <= right) {
        let mid = Math.floor((left + right) / 2);
        console.log(mid, left, right, "khh")

        if (arr[mid] === k) {
            return mid;
        }

        if (arr[mid] < k) {
            return binarySearch(arr, mid + 1, right, k);
        } else {
            return binarySearch(arr, left, mid - 1, k);
        }
    }

    return -1;
}

let arr= [1,2,3,4,4, 4, 5, 6, 7, 9];
console.log(binarySearch(arr, 0, arr.length, 9));

function bS(arr, left, right, k){
    if(left<=right){
        let mid = Math.floor((left+right)/2)

        if(arr[mid] ==k) return mid;
        if(arr[mid]>k) return bS(arr, left, mid-1, k);
        else return bS(arr, mid+1, right, k )
    }
    return -1;
}
console.log(bS(arr, 0, arr.length, 9))

