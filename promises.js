//promise represent upcoming completion or failure of upcoming value;
console.log("hi hi hi");
const sub = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const result = false;
        if(result) resolve('Subscribe to js code');
        else reject(new Error("why you haven't checked the js code"))
    }, 1000)
    })
    console.log(sub);
    sub.then((res)=>{
        console.log(res)
    }).catch(err =>{
        console.log(err)
    })
    console.log('stop');
    const sub1 = Promise.resolve("promise ")
    console.log(Promise.resolve("promise resolve").then((res)=> console.log(res)).catch( err => console.log(err)));
    
    function likeTheVedio(vedio) {
        return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve('like the vedios ' + vedio);
            reject("not in good code");
        }, 1000); })
    }
    likeTheVedio("happy coder").then((res)=>{
        console.log(res);
        likeTheVedio("js js js js").then(res=>{console.log(res)})
    }).catch(err => console.log(err));
    
    console.log('stop');