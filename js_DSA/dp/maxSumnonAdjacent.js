function maxSumNonAdjacent(arr) {
    function helper(index) {
        if (index < 0) return 0;
        if (index === 0) return arr[0];
        return Math.max(helper(index - 1), arr[index] + helper(index - 2));
    }
    return helper(arr.length - 1);
}
