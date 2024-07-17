function subsequence(str){
    let result = [];
    function generate(index, current){
        if(index === str.length){
            result.push(current);
            return;
        }

        generate(index+1, current+str[index]);
        generate(index+1, current);

    }
}