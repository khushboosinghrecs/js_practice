function callBackHell(msg, cb) {
    console.log('hello js1');
    setTimeout(() => {
        cb('Started learning', msg);
    }, 1000);
    console.log('hello js2');
}

callBackHell("js", function (msg, args) {
    console.log(msg, args);
    callBackHell('call backs', (msg, args) => {
        console.log(msg, args);
        callBackHell('call back hell', (msg, args) => {
            console.log(msg, args);
            callBackHell('', () => {
                console.log('learnt callbacks');
            });
        });
    });
});
console.log("Welcome to the world of callBack in js");
