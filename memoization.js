//Bad way
function addToNum(num){
    console.log('taking long time');
    return num + 50;
}
addToNum(5);
addToNum(5);
addToNum(5);

function memoizedFunction(){
    let cache ={};
    return function(num){
        if(cache[num] !== undefined){
            return cache[num];
        }
        else{
            console.log('long time...') 
            cache[num] = num + 8;
            return cache[num];
        }
        
    }
}

let memoized = memoizedFunction();

console.log(memoized(5));

console.log(memoized(5));

console.log(memoized(5));

console.log(memoized(5));


//inline caching function
function findUser(user){
    return `found ${user.firstName} ${user.lastName}`;
}

const user ={
    firstName: 'John',
    lastName: 'Doe',
}
console.log(findUser(user))