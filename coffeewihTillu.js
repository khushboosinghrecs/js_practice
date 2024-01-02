const fun = async()=>{
    console.log('tillu')
}
function  fun1 (){
    console.log('till1111')
    return new Promise((res, rej)=>{
        res('hello')
    })
}

console.log(fun());
console.log(fun1());
console.log('hhhleo')