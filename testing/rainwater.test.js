const trap = require('../problems/rainwater');

describe('trap', () => {
  it('should output the amount of rainwater trapped by the elevation map array', () => {
    expect(trap([0,1,0,2,1,0,1,3,2,1,2,1])).toBe(6);
    expect(trap([4,2,0,3,2,5])).toBe(9);
  });
});