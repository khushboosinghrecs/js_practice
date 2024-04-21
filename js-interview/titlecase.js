function titleCase(str){
    for(let i=0; i<str.length; i++) {
        if (i === 0){
            str[i]=str[i].toUpperCase();
        }

        if(str[i] ===' '){
            str[i+1]=str[i+1].toUpperCase();
        }
    }

    str.split(' ').
    console.log(str);
    return str;
}


function titleCase(str){
    let words = str.split(" ");
    words = words.map(word=>{
        if(word.length===0){
            return word;
        }
        
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    })
    return words.join(" ");

}

console.log(titleCase('khushih how are you?'));


