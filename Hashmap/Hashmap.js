// Node.js ES6 Linked List Implementation

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.nextNode = null;
//   }
// }

class HashMap {
  constructor(loadFactor = 0.75, initialCapacity = 8) {
    // loadFactor: threshold used to determine when to resize (grow) the hash map.
    // initialCapacity: starting number of buckets.
    this.loadFactor = loadFactor;
    this.capacity = initialCapacity;
    this.buckets = new Array(this.capacity).fill(null).map(() => []); // Each bucket is an array.
    this._size = 0; // Stores the number of key-value pairs in the hash map.
  }

  // hash(key): Produces a hash code and returns an index based on the current capacity.
  // We use a prime multiplier and also use modulo on every iteration to keep numbers small.
  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      // Use modulo with the current capacity at each iteration to avoid overflow.
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }
    return hashCode;
  }

  // set(key, value): Inserts or updates the key with the specified value.
  set(key, value) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    // Check if key already exists in the bucket.
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i].key === key) {
        // If found, update the value.
        bucket[i].value = value;
        return;
      }
    }

    // Otherwise, insert the new key-value pair.
    bucket.push({ key, value });
    this._size++;

    // Check if resizing is needed.
    if (this._size / this.capacity > this.loadFactor) {
      this._resize();
    }
  }

  // get(key): Returns the value associated with the key. If key does not exist, returns null.
  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i].key === key) {
        return bucket[i].value;
      }
    }
    return null;
  }

  // has(key): Returns true if the key exists in the hash map, false otherwise.
  has(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    return bucket.some((entry) => entry.key === key);
  }

  // remove(key): Removes the entry for key if it exists; returns true if removed, false if not found.
  remove(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i].key === key) {
        bucket.splice(i, 1); // Remove that entry.
        this._size--;
        return true;
      }
    }
    return false;
  }

  // length(): Returns the total number of key-value pairs stored.
  length() {
    return this._size;
  }

  // clear(): Removes all entries from the hash map.
  clear() {
    this.capacity = 8; // Reset to initial capacity if desired.
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
    this._size = 0;
  }

  // keys(): Returns an array containing all keys.
  keys() {
    const allKeys = [];
    this.buckets.forEach((bucket) => {
      bucket.forEach((entry) => {
        allKeys.push(entry.key);
      });
    });
    return allKeys;
  }

  // values(): Returns an array containing all values.
  values() {
    const allValues = [];
    this.buckets.forEach((bucket) => {
      bucket.forEach((entry) => {
        allValues.push(entry.value);
      });
    });
    return allValues;
  }

  // entries(): Returns an array of key-value pair arrays.
  entries() {
    const allEntries = [];
    this.buckets.forEach((bucket) => {
      bucket.forEach((entry) => {
        allEntries.push([entry.key, entry.value]);
      });
    });
    return allEntries;
  }

  // Internal method to resize (double) the underlying buckets array.
  _resize() {
    const oldBuckets = this.buckets;
    this.capacity *= 2; // Double the capacity.
    // Create new buckets with the new capacity.
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
    this._size = 0; // Reset size; we'll re-add all entries.

    // Rehash all key-value pairs into the new buckets.
    oldBuckets.forEach((bucket) => {
      bucket.forEach((entry) => {
        this.set(entry.key, entry.value);
      });
    });
  }
}

// Extra Credit: HashSet class using HashMap internally.
class HashSet {
  constructor(loadFactor = 0.75, initialCapacity = 8) {
    // We use a HashMap where each key in the set maps to a dummy value.
    this.map = new HashMap(loadFactor, initialCapacity);
  }

  // add(key): Adds a new key to the set.
  add(key) {
    // Dummy value can be true or any constant.
    this.map.set(key, true);
  }

  // has(key): Checks if the key exists in the set.
  has(key) {
    return this.map.has(key);
  }

  // remove(key): Removes the key from the set.
  remove(key) {
    return this.map.remove(key);
  }

  // clear(): Clears all keys from the set.
  clear() {
    this.map.clear();
  }

  // size(): Returns the number of keys in the set.
  size() {
    return this.map.length();
  }

  // keys(): Returns an array of keys in the set.
  keys() {
    return this.map.keys();
  }
}

// ----------------------
// Testing the HashMap
// ----------------------

// Create a new HashMap instance with load factor 0.75.
const test = new HashMap(0.75);

// Populate the hash map with initial key-value pairs.
test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

// At this point, the load factor should be at or near 0.75.
// Overwrite some nodes. This should update the existing entries.
test.set("apple", "green"); // Overwriting 'apple' with a new value.
test.set("banana", "light yellow"); // Overwriting 'banana'

// Confirm that length() still returns the original count (should be 12).
console.log(
  "Length before adding new element (overwrite test):",
  test.length()
);

// Add one more element to trigger the resizing of the hash map.
test.set("moon", "silver");

// After expansion, the entries are rehashed across the larger bucket array.
console.log("Length after adding 'moon':", test.length());
console.log("Current Keys:", test.keys());
console.log("Current Values:", test.values());
console.log("Current Entries:", test.entries());

// Testing other methods:
console.log("Get 'carrot':", test.get("carrot"));
console.log("Has 'dog':", test.has("dog"));
console.log("Remove 'hat' successful?", test.remove("hat"));
console.log("Keys after removing 'hat':", test.keys());

// Clearing the hash map.
test.clear();
console.log("Length after clear():", test.length());

// ----------------------
// Testing the HashSet (Extra Credit)
// ----------------------

const setTest = new HashSet();
setTest.add("apple");
setTest.add("banana");
setTest.add("cherry");
console.log("HashSet has 'apple'? ", setTest.has("apple"));
console.log("HashSet size before removal: ", setTest.size());
setTest.remove("banana");
console.log("HashSet size after removal: ", setTest.size());
console.log("HashSet keys:", setTest.keys());

// export default Hashmap;
