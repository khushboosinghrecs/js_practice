function twoPointer(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        if (arr[left] + arr[right] == target) {
            return [arr[left], arr[right]];
        } else if (arr[left] + arr[right] < target) {
            left++;
        } else {
            right--;
        }
    }
}