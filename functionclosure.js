function fun(initialValue) {
    let value = initialValue; // Initialize value with the initial argument
  
    // Return a function that can be called with or without arguments
    return function(newValue) {
      if (newValue !== undefined) {
        // If called with an argument, update the value
        value = newValue;
      }
  
      return value; // Return the current value
    };
  }
  
  var x = fun(10); // Initialize x with an initial value of 10
  
  console.log(x(440)); // This sets the value to 440, and it returns 440
  var y = fun(30); // Initialize a new variable y with an initial value of 30
  
  console.log(y()); // This returns 30, as there are no arguments provided
  console.log(y()); // This also returns 30
  