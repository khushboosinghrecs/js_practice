// Can we use await only with promise?(

const thenable={ 
    then: function (callback){
        setTimeout(() => {
            callback(2);
        }, 100);
    }
}

const value = await thenable;

console.log(value);
