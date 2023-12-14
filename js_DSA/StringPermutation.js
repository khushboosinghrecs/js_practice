function permutation(arr) {
    for(let i=0; i<arr.length; i++){
        temp= ''
        for(let j=i; j<arr.length; j++){
            temp = temp+ arr[j]
            console.log(temp);
        }
    }
  
}
permutation('abc');

// a
// ab
// abc
// b
// bc
// c