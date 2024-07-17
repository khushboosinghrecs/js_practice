function climbStairs(n) {
if(n<=1){
    return 1;
}
return climbStairs(n-1) + climbStairs(n-2);
}

//              climbStairs(4)
//                   /     \
//      climbStairs(3)                  climbStairs(2)
//              / \                              / \
// climbStairs(2) climbStairs(1)     climbStairs(1) climbStairs(0)
//   / \     
// climbStairs(1) climbStairs(0)
