const findTheDistanceValue = require('../problems/findTheDistanceValue.js');

describe('findTheDistanceValue', () => {
  it('should return the number of elements in arr1 that are d or more away from all elements in arr2', () => {
    expect(findTheDistanceValue([4,5,8], [10,9,1,8], 2)).toBe(2);
    expect(findTheDistanceValue([1,4,2,3], [-4,-3,6,10,20,30], 3)).toBe(2);
    expect(findTheDistanceValue([2,1,100,3], [-5,-2,10,-3,7], 6)).toBe(1);
  });
  it('should return proper number for d of 0', () => {
    expect(findTheDistanceValue([1,2,3,4], [5,6,7,8], 0)).toBe(4);
    expect(findTheDistanceValue([1,2,3,4], [4,5,6,7], 0)).toBe(3);
  });
});