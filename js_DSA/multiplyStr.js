// "2[abc]3[cd]ef"
// Output: "abcabccdcdcdef"

let str = "4[abc]3[cd]ef";
let obj = {}
for(let i=0; i<str.length; i++){
    if (str[i] == '1' || str[i] =='2' || str[i] =='3' || str[i] == '4'){
        let multiply = Number(str[i]);
        console.log(typeof multiply)
        let j= i+2;
        let strr = ''
        while(str[j] != ']' && j<=str.length)
        {
            strr= strr + str[j];
            j++
        }
        obj[Number(multiply)] = strr;
    }
}
let output_str =''
console.log(obj);
for( let key in obj){
    let l= key;
    while(l--){

output_str= output_str+obj[key]    }
}

console.log(output_str);