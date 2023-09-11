// Async Await => best approach to solve 
console.log("start");
function shareVedio(vedio, a) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            a ? resolve('Sharew the vedio', vedio) :
                reject('shared code is not in good block')
        }, 1100)
    })
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
// wait for message1 then 2 then 3
const result =async  ()=>{
const message1 = await shareVedio("Roadcolor", true);
const message2 = await shareVedio("Roadcolor", true);
const message3 = await likeTheVedio("Roadcolor", true);
console.log('heelpp')
console.log({message1 , message3, message2});

}
// if any of the promise failed will go in catch block
const result2 =async  ()=>{
    try{
    // console.time('t1');
    const message1 = await shareVedio("Roadcolor", true);
    console.log({message1});
    const message2 = await shareVedio("Roadcolor", true);
    console.log({ message2});
    const message3 = await likeTheVedio("Roadcolor", false);
   
    console.log({message1 , message3, message2});
    // console.timeEnd('tend')
    }
    catch (err){
        console.log("in catch ",err)

    }
    }
result();
result2()
console.log("stop");