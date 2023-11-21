function one() {
    return 1;
  }
  
  function two() {
    return 2;
  }
  
  function plus(num) {
    return {
      operator: "+",
      num,
    };
  }
  
  function minus(num) {
    return {
      operator: "-",
      num,
    };
  }
  
  function Two(obj) {
    return eval(`2 ${obj.operator} ${obj.num}`);
  }
  
  function One(obj) {
    return eval(`1 ${obj.operator} ${obj.num}`);
  }