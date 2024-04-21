function factorial(n){
    if(n===0 || n===1) return 1;
    else return n*factorial(n-1);
}

function isPrime(num) { 

    if (num <= 1) return false; 
    console.log(Math.sqrt(num))
    for (let i = 2; i <= Math.sqrt(num); i++) { 
  console.log(i, 'isPrime')
      if (num % i === 0) return false; 
  
    } 
  
    return true; 
  
  } 

isPrime(15);