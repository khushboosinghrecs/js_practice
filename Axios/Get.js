const axios = requie('axios');
axios.get('/user/Id=12345').then(function (res){
    console.log(res);
}).catch(function (err) {console.log(err);})


axios.get('user', {
    params:{
        ID: 1234
    }
}).then(function (res){
    console.log(res);
}).catch(function (err) {console.log(err);});


