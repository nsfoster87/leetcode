const countNegatives = require('../problems/countNegatives');

describe('countNegatives', () => {
  it('should return the number of negative numbers in a 2d sorted matrix', () => {
    let grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]];
    expect(countNegatives(grid)).toBe(8);

    grid = [[3,2],[1,0]];
    expect(countNegatives(grid)).toBe(0);

    grid = [[-3,-5,-10],[-4,-5,-11],[-12,-13,-14]];
    expect(countNegatives(grid)).toBe(9);
  });
});