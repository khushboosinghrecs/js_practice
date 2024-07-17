function fib(n){
    if(n<=1) return n;

    return fib(n-1) + fib(n-2);
}

//                  fibonacci(4)
//                      /     \
//      fibonacci(3)             fibonacci(2)
//           / \                        / \
//   fibonacci(2) fibonacci(1) fibonacci(1) fibonacci(0)
//           / \     
// fibonacci(1) fibonacci(0)
