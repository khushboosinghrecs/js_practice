// promise in js
// synchronous and asynchronous code

console.log("hello1");

console.log("hello js");

setTimeout(() => {
    console.log("subscribe to my channel")
}, 0);

console.log("  finish hello js");


function importantAction(username) {
    setTimeout(() => {
        return `Subscribe to ${username}`;
    }, 1000)
}

const msg = importantAction("Namaste js");
console.log(msg);

function importantAction(username, cb) {
    setTimeout(() => {
        cb(`Subscribe to ${username}`);
    }, 1000)
}

importantAction("Namaste js", function (mesag) {
    console.log(mesag);
});
// console.log(msg);

console.log("stop");

function likeTheVedio(vedio, cb) {
    setTimeout(() => {
        cb('like the vedios' + vedio);
    }, 1000);
}

function shareVedio(vedio, cb) {
    setTimeout(() => {
        cb('Share vedio', vedio)
    }, 1000)
}

// call back hell (pyramid of doom)
importantAction("khushboo coder", function (msg) {
    console.log(msg);
    likeTheVedio('Javscript interview que', (action) => {
        console.log(action);
        shareVedio('js interview ques', (action) => {
            likeTheVedio('js like vedios', (action) => {
                console.log('hello jsssssssss')
            })
            console.log(action);
        })
    })
})

importantAction("khushboo 2 coder", function (msg) {
    console.log(msg);
})

importantAction("khushboo 2 coder", function (msg) {
    console.log(msg);
})
importantAction("khushboo 2 coder", function (msg) {
    console.log(msg);
})
importantAction("khushboo 2 coder", function (msg) {
    console.log(msg);
})
