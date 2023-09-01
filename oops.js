class client1 {
   name = '';
   ages = '';
   arr= [];
        constructor(name, age){
        this.name = name
        this.ages = age
        console.log(this)
        this.arr.push(this.ages);
        console.log(this.arr)
    }
  
    // name: 'Ali',
    // species: 'alien',
    showArr = function(){console.log(this.arr);}
    phrase = ()=> console.log('I am Ali')
    fly = ()=> console.log('aaaaaa')
}

const objs = {
    arr : []
}

let obj1 = new client1('khush', 30);
let obj2 = new client1('khush', 40)
obj2.showArr();

objs.arr.push(obj1.name);
objs.arr.push(obj2.name);
objs.arr.push(obj2.ages);

console.log(objs.arr);
// oops concept
class Alien {
    constructor (name, phrase){
        this.name = name;
        this.phrase= phrase;
    }
    fly = () => console.log('eeeeee');
    sayPhrase = () => console.log(this.name)
}

class Bug {
    setName(name, age){
        this.name = name;
        this.age = age;
    }
    getName(){
        console.log(this.name);
        console.log(this.age);
    }
}
objbug= new Bug();
objbug.setName('khush', 30);
objbug.getName();