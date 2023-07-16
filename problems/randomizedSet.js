// 380. Insert Delete GetRandom O(1)

// Implement the RandomizedSet class:

// RandomizedSet() Initializes the RandomizedSet object.
// * bool insert(int val) Inserts an item val into the set if not present.
//   Returns true if the item was not present, false otherwise.
// * bool remove(int val) Removes an item val from the set if present.
//   Returns true if the item was present, false otherwise.
// * int getRandom() Returns a random element from the current set of elements
//   (it's guaranteed that at least one element exists when this method is called).
//   Each element must have the same probability of being returned.

// You must implement the functions of the class such that each function works in average O(1) time complexity.

// Example 1:

// Input
// ["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
// [[], [1], [2], [2], [], [1], [2], []]

// Output
// [null, true, false, true, 2, true, false, 2]

// Explanation
// RandomizedSet randomizedSet = new RandomizedSet();
// randomizedSet.insert(1); // Inserts 1 to the set. Returns true as 1 was inserted successfully.
// randomizedSet.remove(2); // Returns false as 2 does not exist in the set.
// randomizedSet.insert(2); // Inserts 2 to the set, returns true. Set now contains [1,2].
// randomizedSet.getRandom(); // getRandom() should return either 1 or 2 randomly.
// randomizedSet.remove(1); // Removes 1 from the set, returns true. Set now contains [2].
// randomizedSet.insert(2); // 2 was already in the set, so return false.
// randomizedSet.getRandom(); // Since 2 is the only number in the set, getRandom() will always return 2.


const RandomizedSet = function() {
  this.storage = [];
  this.indexMap = new Map();
};

RandomizedSet.prototype.insert = function(val) {
  if (this.indexMap.has(val)) return false;
  this.storage.push(val);
  this.indexMap.set(val, this.storage.length - 1);
  return true;
};

RandomizedSet.prototype.remove = function(val) {
  if (!this.indexMap.has(val)) return false;
  const index = this.indexMap.get(val);
  const lastItem = this.storage[this.storage.length-1];
  this.storage[index] = lastItem;
  this.storage.pop();
  this.indexMap.delete(val);
  // must check, because in the case that the last item is also
  // the first item, we would be reinserting the item into the indexMap
  if (this.indexMap.has(lastItem)) this.indexMap.set(lastItem, index);
  return true;
};

RandomizedSet.prototype.getRandom = function() {
  const randomIndex = Math.floor(Math.random() * this.storage.length);
  return this.storage[randomIndex];
};

module.exports = RandomizedSet;