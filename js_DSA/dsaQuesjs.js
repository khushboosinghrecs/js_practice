// for generating a large array
function generateArray(n) {
    const arr = [];
    for (let i = 0; i < n; i++) {
       arr.push(Math.floor(Math.random() * n));
    }
    return arr;
   }
   
   const largeArray = generateArray(100000);
   
   // Time measurement function
   function measureExecutionTime(func) {
    const startTime = performance.now();
    func();
    const endTime = performance.now();
    return endTime - startTime;
   }
   
   // Array access
   function accessArrayElement() {
    const element = largeArray[largeArray.length - 1];
   }
   console.log(`Array access time: ${measureExecutionTime(accessArrayElement)} ms`);
   
   // Array search
   function searchArrayElement() {
    const index = largeArray.indexOf(100000);
   }
   console.log(`Array search time: ${measureExecutionTime(searchArrayElement)} ms`);
   
   // Array insert
   function insertArrayElement() {
    largeArray.push(Math.floor(Math.random() * 100000));
   }
   console.log(`Array insert time: ${measureExecutionTime(insertArrayElement)} ms`);
   
   // Object access
   function accessObjectProperty() {
    const obj = {key: 'value'};
    const value = obj.key;
   }
   console.log(`Object access time: ${measureExecutionTime(accessObjectProperty)} ms`);
   
   // Object search
   function searchObjectProperty() {
    const obj = {key: 'value'};
    const value = obj.hasOwnProperty('key') ? obj.key : 'default';
   }
   console.log(`Object search time: ${measureExecutionTime(searchObjectProperty)} ms`);
   
   // Object insert
   function insertObjectProperty() {
    const obj = {key: 'value'};
    obj.newKey = 'newValue';
   }
   console.log(`Object insert time: ${measureExecutionTime(insertObjectProperty)} ms`);
   
   // Map access
   function accessMapElement() {
    const map = new Map([['key', 'value']]);
    const value = map.get('key');
   }
   console.log(`Map access time: ${measureExecutionTime(accessMapElement)} ms`);
   
   // Map search
   function searchMapElement() {
    const map = new Map([['key', 'value']]);
    const value = map.has('key') ? map.get('key') : 'default';
   }
   console.log(`Map search time: ${measureExecutionTime(searchMapElement)} ms`);
   
   // Map insert
   function insertMapElement() {
    const map = new Map([['key', 'value']]);
    map.set('newKey', 'newValue');
   }
   console.log(`Map insert time: ${measureExecutionTime(insertMapElement)} ms`);
   
   // Set insert
   function insertSetElement() {
    const set = new Set([1, 2, 3]);
    set.add(4);
   }
   console.log(`Set insert time: ${measureExecutionTime(insertSetElement)} ms`);
   
   // Set search
   function searchSetElement() {
    const set = new Set([1, 2, 3]);
    const hasElement = set.has(2);
   }
   console.log(`Set search time: ${measureExecutionTime(searchSetElement)} ms`);