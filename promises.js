//promise represent upcoming completion or failure of upcoming value;
console.log("hi hi hi");
// const sub = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const result = false;
//         if (result) resolve('Subscribe to js code');
//         else reject(new Error("why you haven't checked the js code"))
//     }, 1000)
// })
// console.log(sub);
// sub.then((res) => {
//     console.log(res)
// }).catch(err => {
//     console.log(err)
// })
console.log('stop');
const sub1 = Promise.resolve("promise ")
console.log(Promise.resolve("promise resolve").then((res) => console.log(res)).catch(err => console.log(err)));
async function fn(){
    const data = sub1();
    console.log(data, 'data')
}

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
// likeTheVedio("happy coder", true).then((res) => {
//     console.log(res);
//     console.log("hhhhhhhhhh")
//     likeTheVedio("js js js js", true).then(res => {
//         shareVedio('happy codeing').then(res => console.log(res));
//         console.log(res)
//     }).catch(err => console.log(err))
// }).catch(err => console.log(err));

//promise chaining => chaining promises by returning promise and by chaining
// likeTheVedio("happy coder", true).then((res) => {
//     console.log(res);
//     console.log("hhhhhhhhhh")
//     return likeTheVedio("js js js js", true)
// }).then(res => {
//     console.log(res);
//     return shareVedio('happy codeing', false)
// }).then(res => console.log(res))
//     .catch(err => console.log(err));

// promise combinator = > help us to execute more than one promise at one time and return result accordingly

// 1-> Promise.all => multiple promises to promise.all it's going run multiple promise in parallel and in end it return array of fullfilled promisese 
// what happened any one will faile? if any one of the result failed all will failed

console.log(Promise.all([ likeTheVedio("happy coder", true),
    likeTheVedio("happy coder", true),
    shareVedio('happy codeing', true)
   ]
).then(res=> console.log(Date.now(), res)).catch(err => console.log('err is failed', err)))

// promise.race => gives first promise that fullfilled or rejected first
console.log(Promise.race([ likeTheVedio("happy coder", true),
    likeTheVedio("happy coder", true),
    shareVedio('happy codeing', true)
   ]
).then(res=>console.log(Date.now(), res)).catch(err => console.log('err is failed', err)))

// Promise.allSettled() => if any of the promise fullfilled and rejected promise array of object with fullfilled and rejected 

console.log(Promise.allSettled([ likeTheVedio("happy coder", true),
    likeTheVedio("happy coder", true),
    shareVedio('happy codeing', false)
   ]
).then(res=>console.log(Date.now(), res)).catch(err => console.log('err is failed', err)))

//Promise.any() => return first fullfilled promise and ignores rejected one if all promises will fail retuurn error
console.log(Promise.any([ likeTheVedio("happy coder", false),
    likeTheVedio("happy coder", false),
    shareVedio('happy codeing', true)
   ]
).then(res=>console.log(Date.now(), res)).catch(err => console.log('err is failed', err)))



console.log('stop');