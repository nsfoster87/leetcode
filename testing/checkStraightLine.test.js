const checkStraightLine = require('../problems/checkStraightLine');

describe('checkStraightLine', () => {
  it('should return true if all coordinates make a straight line', () => {
    expect(checkStraightLine([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]])).toBe(true);
  });
  it('should return false if all coordinates do not make a straight line', () => {
    expect(checkStraightLine([[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]])).toBe(false);
  });
  it('should always return true for coordinates of length 2', () => {
    expect(checkStraightLine([[1,2],[7,1000]])).toBe(true);
    expect(checkStraightLine([[1,2],[0,-4]])).toBe(true);
  });
  it('should work for negative numbers', () => {
    expect(checkStraightLine([[-2,-1],[-1,0],[0,1],[1,2],[2,3],[3,4],[4,5]])).toBe(true);
    expect(checkStraightLine([[1,1],[2,2],[3,4],[4,5],[5,6],[-6,-45]])).toBe(false);
  });
  it('should return the correct answer for out-of-order coordinates', () => {
    expect(checkStraightLine([[3,4],[-2,-1],[6,7]])).toBe(true);
    expect(checkStraightLine([[5,6],[1,1],[7,7],[-3,1]])).toBe(false);
  });
  it('should return true for a horizontal line', () => {
    expect(checkStraightLine([[0,3],[-2,3],[5,3]])).toBe(true);
  });
  it('should return true for a vertical line', () => {
    expect(checkStraightLine([[-12,5],[-12,7],[-12,-100],[-12,-12],[-12,0]])).toBe(true);
  });
});