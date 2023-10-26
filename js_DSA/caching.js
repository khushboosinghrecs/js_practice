function addTo80(n){
    console.log('long time');
    return n+80;
}

function memoizedto80(){
    let cache = {};
    return function(n){
        if(cache[n]){
            return cache[n]
        }else{
            cache[n]= n+80;
            return cache[n];
        }
    }
}