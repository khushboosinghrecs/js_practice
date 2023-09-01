// Write a class that allows getting and setting key-value pairs, however, a time until expiration is associated with each key.

// The class has three public methods:
// set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.
// get(key): if an un-expired key exists, it should return the associated value. Otherwise, it should return -1.
// count(): returns the count of un-expired keys.


// first approach
class KeyValueCache {
    constructor() {
      this.cache = new Map(); // Use a Map to store key-value pairs and their expiration times.
    }
  
    set(key, value, duration) {
      const currentTime = Date.now();
  
      // Check if the key already exists and is not expired.
      if (this.cache.has(key)) {
        const { expirationTime } = this.cache.get(key);
  
        if (currentTime < expirationTime) {
          // Key is unexpired; overwrite the value and duration.
          this.cache.set(key, { value, expirationTime: currentTime + duration });
          return true; // Key already existed and was updated.
        }
      }
  
      // Key doesn't exist or is expired; add a new key-value pair.
      this.cache.set(key, { value, expirationTime: currentTime + duration });
      return false; // Key didn't exist or was expired.
    }
  
    get(key) {
      const currentTime = Date.now();
  
      // Check if the key exists and is not expired.
      if (this.cache.has(key)) {
        const { value, expirationTime } = this.cache.get(key);
  
        if (currentTime < expirationTime) {
          return value; // Key is unexpired; return the associated value.
        } else {
          // Key is expired; remove it from the cache.
          this.cache.delete(key);
        }
      }
  
      return -1; // Key doesn't exist or is expired.
    }
  
    count() {
      const currentTime = Date.now();
  
      // Iterate through the cache and count unexpired keys.
      let unexpiredCount = 0;
      for (const [key, { expirationTime }] of this.cache.entries()) {
        if (currentTime < expirationTime) {
          unexpiredCount++;
        } else {
          // Key is expired; remove it from the cache.
          this.cache.delete(key);
        }
      }
  
      return unexpiredCount;
    }
  }
  
  // Example usage:
  const cache = new KeyValueCache();
  cache.set(1, 42, 1000); // Set key 1 with value 42 and a 1-second expiration.
  cache.set(2, 99, 2000); // Set key 2 with value 99 and a 2-second expiration.
  
  console.log(cache.get(1)); // Output: 42
  console.log(cache.get(2)); // Output: 99
  console.log(cache.count()); // Output: 2 (both keys are unexpired)
  
  setTimeout(() => {
    console.log(cache.get(1)); // Output: -1 (key 1 has expired)
    console.log(cache.count()); // Output: 1 (only key 2 is unexpired)
  }, 1500);

  
  secondApproach
  class desi {
    db = []
    constructor() {
    }


    set(value) {
        this.db.push({ key: value.key, value: value.value, time: value.time })
        return 'Inserted'
    }



    get(value) {
        if (this.db.find(key => key.key === value)) {

            const temp = this.db.find(key => key.key === value);
            return temp?.time <= Date.now() ? temp : -1;
        } else {
            return `${value} does not exist`;
        }
    }

    count() {
        let temp = 0;
        this.db.forEach(data => {
            if(data.time >= Date.now()) temp++
        })
        return temp
    }

}
const d = new desi();
console.log(d.set({ key: 2, value: 'test1', time: Date.now() - 100 }))
console.log(d.set({ key: 23, value: 'te3st2', time: Date.now() - 500 }))
console.log(d.set({ key: 232, value: 'teq34st3', time: Date.now() }))
console.log(d.set({ key: 32, value: 'tes123t3', time: Date.now() + 23 }))
console.log(d.set({ key: 22, value: 'tesw2e3t3', time: Date.now() + 1234 }))

console.log(d.get(23))
console.log(d.get(3))
console.log(d.get(232))
console.log(d.count(), "d")