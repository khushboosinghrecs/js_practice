
// Sum all numbers:
function sumOfAllNum(){
    let arr = [5, 10, 15,  16, 20];
    let result = arr.reduce((acc, curr)=>{
        return acc+ curr;
    }, 0)
    console.log(result);
}
sumOfAllNum();

// Multiply all numbers:
function MultiplyAllNum(){
    let arr = [1, 2, 3, 4, 5];
    let result = arr.reduce((sum, x) => sum*x, 1);
    console.log(result);
}
MultiplyAllNum();

// find MaxNum
function maxNum(){
    let arr= [1,2, 3, 4, 6];
    let result = arr.reduce((mx,curr)=>{
        return curr>mx ? curr : mx;
    }, arr[0]);
    let min = arr.reduce((min, curr)=>{
        return curr<min ? curr: min
    }, arr[0]);
    console.log(result, min);
}
maxNum();

// Concatenate all strings:
function contatenatestr(){
    let arr = ['khush', 'singh', 'world'];
    let res = arr.reduce((acc, str)=>acc+str, '');
    console.log(res);
}
contatenatestr();

// Count occurrences of each element:

function occOfEachnum(){
    let arr = [1, 2, 2, 3, 3, 3];
    let res = arr.reduce((count, x)=>{
        count[x] = (count[x]+1) || 0
    }, {})
}

// Flatten a 2D array:
function FlattentwoDArr(){
    let arr = [[1, 2], [3, 4], [5, 6]];
    let res = arr.reduce((flat, x)=> flat.concat(x), []);
    console.log(res);
}

// Convert array of arrays to object:
function convertArrOfObj(){
    let arr = [['a', 1], ['b', 2], ['c', 1]];
    let res = arr.reduce((obj, [key, val])=>{
        obj[key] = val;
        return obj;
    }, {})
    console.log(res);
}
convertArrOfObj();

// Group by a property:

function groupByProp(){
    let arr = [{name: 'Alice', group: 'A'}, {name: 'Bob', group: 'B'}, {name: 'Charlie', group: 'A'}];
    let res =arr.reduce((prop, curr)=>{
        let key = curr.group;
        if(!prop[key]){
            prop[key] = [];
        }
        prop[key].push(curr.name);
        return prop
        
    }, {});

    console.log(res);
}
groupByProp();

// Sum of squares:
function sumOfsq(){
    const arr = [1, 2, 3];
    const res = arr.reduce((acc, cur)=>{
        return sum+ cur*cur;
    }, 0);
    console.log(res);
}

// Object with counts:
function objWithCount(){
    let arr = ['apple', 'banana', 'apple', 'cherry'];
    let res= arr.reduce((count, fruit)=>{
        count[fruit] = (count[fruit] || 0) + 1;
        return count;
    }, {});
}
objWithCount();

// Longest string:
function largestStr(){
    let arr = ['apple', 'banana', 'cherry'];

    let res = arr.reduce((lar, curr)=> str.length> curr.length? str : curr, '');
    console.log(res);
}
largestStr();

// Most frequent element:
function mostFrequent(){
    let arr = [1, 2, 2, 3, 3, 3];
    let res = arr.reduce((count, x)=>{
        count[x] = (count[x] || 0) +1;
        return count;
    })
    console.log(res);
    let m = Object.keys(res).reduce((a, b)=> result[a]> result[b] ? a: b);
    console.log(m);
}
mostFrequent();