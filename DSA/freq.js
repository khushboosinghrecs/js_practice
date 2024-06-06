function freqCounter(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]]++;
    } else {
      obj[arr[i]] = 1;
    }
  }
  console.log(obj);
  let keys = Object.keys(obj);
  let vals = Object.values(obj);
  let entries = Object.entries(obj);

  for (let k in keys) {
    console.log(k, "keee");
  }
  for (let k of keys) {
    console.log(k, "val val");
  }

  for (let [k, v] of entries) {
    console.log(k, v, "endidijdi");
  }
  for (let [k] of entries) {
    console.log(k, "kkkkkkkk");
  }
  for (let k of entries) {
    console.log(k, "llllllllll");
  }

  for (let k in obj) {
    console.log(k, "objjjjjj");
  }

  for (let j in obj) {
    console.log(j, obj[j], "jjjjjjjjj");
  }
}

freqCounter([1, 2, 3, 2, 3, 1, 3]);
