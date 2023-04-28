const twoSum = require('../problems/twoSum.js');

describe('twoSum', () => {
  it('should return the indices of the two numbers that add up to the target', () => {
    expect(twoSum([2,7,11,15], 9)).toEqual([0,1]);
    expect(twoSum([3,2,4], 6)).toEqual([1,2]);
    expect(twoSum([3,3], 6)).toEqual([0,1]);
  });
  it('should work for one of the values equal to 0', () => {
    expect(twoSum([7, 10, 0, 18, 23], 18)).toEqual([2, 3]);
  });
});