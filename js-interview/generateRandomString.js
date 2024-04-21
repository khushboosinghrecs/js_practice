function generateRandomString(length){

    const chanrs='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; 
    let res=''
    for(let i=0; i<length; i++){
        let r = Math.floor(Math.random() * chars.length);
        res += chars[r];
    }
    return res;
     
}