const jump = require('..problems/jump');

describe('jump', () => {
  it('should return the minimum number of jumps to the end of the nums array', () => {
    expect(jump([2,3,1,1,4])).toBe(2);
    expect(jump([2,3,0,1,4])).toBe(2);
    expect(jump([5,7,1,1,2,0,4,3,6,1,2,0,5])).toBe(3);
  });
});