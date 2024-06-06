function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}

function isPalindromes(str) {
  let n = str.length - 1;
  let i = 0;
  while (i <= n) {
    if (str[i] !== str[n]) return false;
    i++;
    n--;
  }

  return true;
}

console.log(isPalindrome("aabbaa"));

console.log(isPalindromes("hhabnahh"));
