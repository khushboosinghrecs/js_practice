// 1

console.log('start');
// const promise1 = new Promise((resolve, reject)=>{
//     console.log(1);
//     resolve(2);
 
// })

// // promise1.then((res)=>{
// //     console.log(res);
// // })
// const promise2 = new Promise((resolve, reject)=>{
//     console.log(3);
//     resolve(4);
//     console.log(5);
// })

// promise2.then((res)=>{
//     console.log(res);
// })

// const promise3 = new Promise((resolve, reject)=>{
//     console.log(6);
//     // resolve(10);
    
//     console.log(7);
// })
// console.log(Promise.all([promise1, promise2, promise3]).then(res=>  console.log("hello ",res)))

// promise3.then((res)=>{
//     console.log(res);
// })

// const fn = ()=>{
//   return  new Promise((resolve, reject)=>{
//         console.log(89);
//         resolve('Success');
//     })
// }
// console.log('middle');
// fn().then((res)=>{
//     console.log(res);
// })

// function job(){
//     return new Promise (function (resolve, reject){
//         reject();
//     })
// }

// let promise = job();
// promise
// .then(function(){
//     console.log('Success1');
// }).then(function(){
//     console.log('success2');
// }).then(function(){
//     console.log('success3');
// }).then(function(){
//     console.log('success4');
// }).then(function(){
//     console.log('success5');
// }).catch(function(){
//     console.log('success6');
// }).then(function(){
//     console.log('success7');
// })

// function job2(state){
//     return new Promise (function (resolve, reject){
//       if(state){
//         console.log('hello 1')
//         resolve('Success');
//         console.log('hello 12')
//       }else{
//         console.log('hello 2');
//         reject('error')
//       }
//         reject();
//     })
// }

// let promise2 = job2(true);
// promise2
// .then(function(){
//     console.log('Success1');
// }).then(function(){
//     console.log('success2');
// }).then(function(){
//     console.log('success3');
// }).then(function(){
//     console.log('success4');
// }).then(function(){
//     console.log('success5');
// }).catch(function(){
//     console.log('success6');
// }).then(function(){
//     console.log('success7');
// })

function job3(state){
    return new Promise (function (resolve, reject){
      if(state){
        console.log('hello 1')
        resolve('Success');
        console.log('hello 12')
      }else{
        console.log('hello 2');
        reject('error')
      }
        reject();
    })
}

let promise3 = job3(true);
// promise3
// .then(function(){
//     console.log('Success1');
//     return job3(false);
// }).catch(function(err){
//     console.log('success2');
//     console.log(err);
//     return 'Error caught';
// }).then(function(data){
//     console.log('success3');
//     console.log(data);
//     return job3(true)
// }).catch(function(err){
//     console.log('success4');
//     console.log(err);
// }).then(function(){
//     console.log('success5');
// }).catch(function(){
//     console.log('success6');
// }).then(function(){
//     console.log('success7');
// })

// promise3
// .then(function(){
//     console.log('Success1');
//     return job3(false);
// }).catch(function(err){
//     console.log('success2');
//     console.log(err);
//     return 'Error caught';
// }).then(function(data){
//     if(data != 'victory'){
//         throw "Defeat";
//     }
//     console.log('success3');
//     console.log(data);
//     return job3(true)
// }).then(function(){
//     console.log('success5');
// }).catch(function(err){
//     console.log('success4');
//     console.log(err);
// }).catch(function(){
//     console.log('success6');
// }).then(function(){
//     console.log('success7');
// })


// console.log('end');

// const firstPromise = new Promise((resolve, reject)=>{
//     resolve("First");
// })
// const secondPromise = new Promise((resolve, reject)=>{
//     resolve(firstPromise);
// })

// secondPromise.then(res => {
//     console.log('ressss', res);
//     return res;
// }).then(res=> console.log(res))

// // rewrite this example code using asyn/await instead if .then


// function loadjson(url){
//     return fetch(url).then((res)=>{
//         if(res.status.success == 200){
//             return res.json();
//         }else{
//             throw new Error(res.status);
//         }
//     })
// }
// async function loadjson(url){
//    let res= await(url);
//    if(res.status == 200){
//     let json = await res.json();
//     return json;
//    }
//    throw new Error(res.status);
// }
// loadjson('https://fakeurl.com/no-such-user.json').catch(err=> console.log(err));

// solve promise recursively
function likeTheVedio(vedio, a) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a) {
                resolve('like the vedios ' + vedio);
            } else
                reject("not in good code");
        }, 1900);
    })
}
function shareVedio(vedio, a) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            a ? resolve('Sharew the vedio', vedio) :
                reject('shared code is not in good block')
        }, 1100)
    })
}
function promRecur(funPromis){
    if(funPromis.length == 0) return;

    const curPromise = funPromis.shift();
    curPromise.then((res)=> console.log(res))
    .catch(err => console.log(err));

    promRecur(funPromis)
}

promRecur([likeTheVedio('abc1', true), shareVedio('abc2', true), shareVedio('abc', 45)]);

// Promise Polyfill implementation

function PromisePolyfill(executor){
    let onResolve , onReject , isFullfilled = false, isCalled = false, value;
    value;
    function resolve(value){
        isFullfilled = true;
        value = val;
        if(typeof onResolve === function){
            onResolve(val);
            isCalled = true
        }
        onResolve(value); 
    }
    function reject(value){
        onReject(value); 
    }
    this.then = function(callback){
        onResolve = callback;
        return this;
    }
    this.catch = function(callback){
        onReject = callback;
        return this;
    }
}

const examplePromise = new PromisePolyfill(resolve, reject)=>{
    setTimeout(()=>{
        resolve(2);
    }, 1000)
}

examplePromise.then((res) =>{
    console.log(res);
}).catch((err) =>console.error(err));