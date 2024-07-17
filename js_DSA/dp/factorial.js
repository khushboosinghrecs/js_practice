function factorial(n){
    let dp =[];
    dp[0]=1;
    for(let i=1; i<=n; i++){
        dp[i] = i*dp[i-1];
    }
    return dp[n];
}