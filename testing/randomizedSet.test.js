const RandomizedSet = require('../problems/randomizedSet');

describe('randomizedSet', () => {
  it('should be able to create a new instance of type RandomizedSet', () => {
    const randomizedSet = new RandomizedSet();
    expect(RandomizedSet.prototype.isPrototypeOf(randomizedSet));
  });
  it('should insert a value into the set', () => {
    const randomizedSet = new RandomizedSet();
    const inserted = randomizedSet.insert(1);
    expect(inserted).toBe(true);
    expect(randomizedSet.getRandom()).toBe(1);
  });
  it('should remove an item from the set, returning true if successful', () => {
    const set = new RandomizedSet();
    const nothingHere = set.remove(2);
    expect(nothingHere).toBe(false);

    const inserted = set.insert(2);
    expect(randomizedSet.getRandom()).toBe(2);
    const removed = set.remove(2);
    expect(removed).toBe(true);
  });
  it('should retrieve a random value from the set', () => {
    const set = new RandomizedSet();
    set.insert(1);
    set.insert(2);
    set.insert(3);
    expect([1,2,3].includes(set.getRandom())).toBe(true);
  });
});