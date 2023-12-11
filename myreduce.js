// myReduce.js
const myReduce = function (callback, initialValue) {
    if (typeof callback !== 'function') {
      throw new TypeError('Callback must be a function');
    }
  
    let accumulator = initialValue === undefined ? this[0] : initialValue;
    const startIndex = initialValue === undefined ? 1 : 0;
  
    for (let i = startIndex; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }
  
    return accumulator;
  };
  
  module.exports = myReduce;
  const result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].myReduce((acc, item) => acc + item, 0);
  