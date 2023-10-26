function binarySearch(target) {
    var arr = [1, 2, 3, 4, 5];
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = left + (right - left) / 2;
        if (arr[mid] === target) return arr[mid];
        if (target > arr[mid]) left = mid + 1;
        else right = mid - 1;
    }
}
console.log(binarySearch(3));


