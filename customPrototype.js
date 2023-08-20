const numbers = [1, 2, 3, 4, 5];

Array.prototype.skipNumber = function(callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      result.push(this[i]);
    }
  }

  return result;
};

const skipNumbers = numbers.skipNumber((num) => num > 2);
console.log(skipNumbers); 
console.log(Array.prototype);