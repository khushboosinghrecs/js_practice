function curr(arr, amount) {
  for (let i = 0; i < 5; i++) {
    arr[i] = 8 + 1;
  }

  console.log(arr);
  return arr;
}

let arr = [1, 5, 6, 7, 7];
let k = curr(arr, 1);
console.log(arr, k, "guuuuuuu");

function showScope() {
  scope = "local";
  return scope;
}

scope = "global";
console.log(scope);
console.log(showScope());

console.log(scope);

// putstr("enter month name");
var monthname = "";

switch (monthname) {
  case "jan":
    monthname = "Janne";
    break;
  case "fev":
    monthname = "Febbbb";
    break;
  default:
    "khushb";
}

function fun(x, y) {
  this.x = x;
  this.y = y;
}

function weekTemps() {
  this.dataStore = [];
  this.add = add;
  this.average = average;
}

function add(temp) {
  this.dataStore.push(temp);
}

function average() {
  let total = 0;
  for (let i = 0; i < this.dataStore.length; i++) {
    total += this.dataStore[i];
  }
  return total / this.dataStore.length;
}

let thisweek = new weekTemps();
thisweek.add(78);
thisweek.add(77);
thisweek.add(90);

console.log(thisweek.average());
