const candy = require('../problems/candy');

describe('candy', () => {
  it('should return the minimum amount of candy given each child\'s rating', () => {
    expect(candy([1,0,2])).toBe(5);
    expect(candy([1,2,2])).toBe(4);
    expect(candy([7,1,6,5,4,5,5,0,1,3])).toBe(19);
  });
});