
function coinChange(coins, amount){
    if(amount === 0) return 0;
    if(amount<0) return Infinity;
    let minCoin = Infinity;
    coins.forEach(coin => {
        let res = coinChange(coins, amount-coin);
        if(res !== Infinity){
            minCoin = Math.min(minCoin, res+1);
        }
    });
    return minCoin;
}





console.log(coinChange([2], 6))

//                                  coinChange(5)
//                                  /     |      \
//                               cc(4)   cc(3)   cc(0)
//                                  /|\      /|\ 
//                      cc(3) cc(2) cc(-1)    cc(2) cc(1) cc(-2)
//                              /|\    /|\          /|\    /|\ 
// cc(2) cc(1) cc(0)  cc(1) cc(0) cc(-1)    cc(1) cc(0) cc(-2)   cc(1) cc(0) cc(-2) cc(0)
//  /|\    /|\   |       /|\    |     |        /|\    |     |       /|\    |     |
// cc(1) cc(0) cc(-1)  cc(0) cc(-1) cc(-2)   cc(0) cc(-1) cc(-2)  cc(0) cc(-1) cc(-2)  cc(0)
//  /|\    |     |           |     |     |          |     |     |         |     |     |     |
// cc(0) cc(-1) cc(-2)       |     |     |          |     |     |         |     |     |     |
//   |     |     |           |     |     |          |     |     |         |     |     |     |
