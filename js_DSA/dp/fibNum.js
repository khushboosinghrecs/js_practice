function fib(n){
    let dp = Array(n).fill(0);
    dp[0] = 0;
    dp[1] = 1;

    for(let i=2; i<n; i++){
        dp[i] = dp[i-2] + dp[i-1];
    }
    return dp[n-1];
}