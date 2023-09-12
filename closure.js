// clousure in js
// lexical scope

function makeFun(){
    var name = "Hello khushi";
    function displayName(num){
        console.log(name, num);
    }
return displayName;
}

function sum(a){
return function(b){
    return function(c){
        return function(d){
            console.log(a, b, c, d)
            return a+b+c+d;
        }
    }
};
}

let count = 0;
(function(){
    if(count ==0){
        let count =1;
        console.log(count);
    }
    console.log(count)
})();

function a(){
    for(var i=0; i<3; i++){
        console.log(i);
        setTimeout(() => {
            console.log(i *1000);
        }, i*1000);
    }
}
function b(){
    for(let i=0; i<3; i++){
        setTimeout(() => {
            console.log(i *1000);
        }, i*1000);
    }
}

for(var j=0; j<3; j++){
    function inner(j){
    console.log(j);
    setTimeout(() => {
        console.log(j *1000);
    }, j*1000);
}
inner(j);
}

a();
b();

makeFun()(7);
console.log(sum(1)(2)(3)(4))

// private counter

function counter(){
    var _counter = 0;

    function add(increament){
     _counter += increament;
    }

    function retrieve(){
        return "Counter = " + _counter;
    }

    return{
        add,
        retrieve
    }
}

const c = counter();
c.add(5);
c.add(20)
console.log(c.retrieve())


function counterLet(){
    let _counterLet = 0;

    function add(increament){
     _counterLet += increament;
    }

    function retrieve(){
        return "CounterLet = " + _counterLet;
    }

    return{
        add,
        retrieve
    }
}

const cLet = counterLet();
cLet.add(5);
cLet.add(20)
console.log(cLet.retrieve())