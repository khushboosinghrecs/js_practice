function areAnagrams(str1, str2){
    console.log(str1.toUpperCase().split("").sort().join(""), str2.toUpperCase().split("").sort().join(""), 'llllllllll');
    return str1.toUpperCase().split("").sort().join("")=== str2.toUpperCase().split("").sort().join(""); 


    // return str1.split('').sort().join('').toLowerCase() === str2.split('').sort().join('').toLowerCase();
}

const str1 = "Listen";
const str2 = "Silent";

console.log(areAnagrams(str1, str2));  // Output: true

const str3 = "Hello";
const str4 = "Olelh";

console.log(areAnagrams(str3, str4));  // Output: true

const str5 = "Anagram";
const str6 = "Nag a ram";

console.log(areAnagrams(str5, str6));