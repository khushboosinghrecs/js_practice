function lastOccurrence(str, char) {
    function helper(index) {
        if (index < 0) return -1;
        if (str[index] === char) return index;
        return helper(index - 1);
    }
    return helper(str.length - 1);
}
