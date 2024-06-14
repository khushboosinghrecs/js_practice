
input = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
k = 3
// output = [ 1, 2, 3, 6, 5, 4, 7, 8, 9, 12 , 11, 10, 13, 14]

function reverseKele(arr, k){
    if(k>arr.length ) return -1;
    let ans =[];
    let val = 0
    // function reverseChunnk(arr, k){
        while(val<arr.length){
            console.log(val, 'val');
            const start = val ;
            let end = val+k;
            if(end >arr.length){
                end = arr.length-(k+k);
            }
        let sameEle = arr.slice(start, start+k);
        let revEle = arr.slice(k, k+k).reverse()
        ans.push(...sameEle)
        ans.push(...revEle);
        val =val +(k+k);
        }
        console.log(ans);
}

reverseKele(input, k)



console.log('hello')