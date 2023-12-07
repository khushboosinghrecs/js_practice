let arr =[1, 2, 2, '4', '4', 3, 3, 3, 5];
let freqObj = {}
for(let i=0; i<arr.length; i++){
if(freqObj[arr[i]]){
    freqObj[arr[i]]++;
}
else{
    freqObj[arr[i]] = 1;
}
}
console.log(freqObj);
let keysArray = [1, 2, 3, 4, 5, 6];
let valuesArray = ["one", "two", "three", "four", "five", "six"];
let object = {};
for (let i = 0; i < keysArray.length; i++) {
   object[valuesArray[i]] = keysArray[i];
}
for (let key in object) {
  console.log( "Key - " + key + " , value - " + object[key]);
}
console.log(object)