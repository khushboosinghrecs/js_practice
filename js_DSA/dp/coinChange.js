// function coinChange(arr, amount){
//     let dp = Array(arr.length).fill(Infinity);
//     dp[0] = 0;
//     arr.forEach(element => {
        
//     });
// }


let amount = new Map();

function coinChange(coins, amount){
    if(amount[target]) return amount[target];

    amount[target] = result;
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
