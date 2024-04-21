function flattenArray(nestedArra){
    let result= [];

    function flatten(elemenet){
        if(Array.isArray(elemenet)){
            for(let item of elemenet){
                flatten(item);
            }
        }
        else{
            result.push(elemenet);
        }
    }
    result = result;
}

console.log(flattenArray([1, [2, [3, [4, 5]]], [6, 7], 8]));