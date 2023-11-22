// Do you know what happens when we add an 𝗮𝘀𝘆𝗻𝗰 keyword to a function?

// When we add an 𝗮𝘀𝘆𝗻𝗰 keyword to the function, the function always returns a promise fulfilled with the returned value.

const sayHello = async function(){
    return 'Hello';
}
// is the same as:
const sayHello1 = function (){
    return new Promise((resolve, reject) =>{
        resolve('Hello');
    })
}

const sayHello2 = function(){
    return Promise.resolve('Hello')
}
// So to get the actual string 𝗛𝗲𝗹𝗹𝗼, we need to add .𝘁𝗵𝗲𝗻 handler like this:
sayHello().then(function(result){
    console.log(result); // Hello
})

// 𝗣𝗦: 𝗮𝘀𝘆𝗻𝗰 is used along with 𝗮𝘄𝗮𝗶𝘁 keyword to perform some async operation like this:
const getData = async function(){
    try{
        const {data} = await axios.get('url');
        return data;
    }catch(err){}
}

getData().then(result =>console.log(result)).catch(err =>console.log(err));