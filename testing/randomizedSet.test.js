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
  it('should return false for insert of item already in set', () => {
    const set = new RandomizedSet();
    expect(set.insert(1)).toBe(true);
    expect(set.insert(1)).toBe(false);
  });
  it('should remove an item from the set, returning true if successful', () => {
    const set = new RandomizedSet();
    const nothingHere = set.remove(2);
    expect(nothingHere).toBe(false);

    const inserted = set.insert(2);
    expect(set.getRandom()).toBe(2);
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
  it('should return true when inserting a previously removed value', () => {
    const set = new RandomizedSet();
    expect(set.remove(0)).toBe(false);
    expect(set.remove(0)).toBe(false);
    expect(set.insert(0)).toBe(true);
    expect(set.getRandom()).toBe(0);
    expect(set.remove(0)).toBe(true);
    expect(set.insert(0)).toBe(true);
  })
});