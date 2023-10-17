// A lexical environment is basically the scope or environment the engine is currently 
// reading code in. A new lexical environment is created when curly brackets {} are used, 
// even nested brackets {{...}} create a new lexical environment.

function one() { 
    var isValid = true; // local env
    two(); // new execution context
   } 
   function two() { 
    var isValid; // undefined
   } 
   var isValid = false; // global
   one()

   //The scope chain gives us access to variables in the parent environment 