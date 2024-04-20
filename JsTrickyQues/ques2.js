const promise= new Promise((res, rej)=>{
    rej(Error('some error occurred'));
})

promise.catch(err=>console.log(err));
promise.catch(err=> {return console.log(err.message)});