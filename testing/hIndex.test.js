const hIndex = require('../problems/hIndex');

describe('hIndex', () => {
  it('should return the H-Index for a given array of citations', () => {
    expect(hIndex([3,0,6,1,5])).toBe(3);
    expect(hIndex([1,3,1])).toBe(1);
  });
  it('should return 0 for an array of [0]', () => {
    expect(hIndex([0])).toBe(0);
  });
});