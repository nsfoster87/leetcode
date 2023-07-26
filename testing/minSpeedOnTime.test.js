const minSpeedOnTime = require('../problems/minSpeedOnTime');

describe('minSpeedOnTime', () => {
  it('should return the minimum speed for an hour greater than n', () => {
    expect(minSpeedOnTime([1,3,2], 6)).toBe(1);
  });
  it('should return the minimum speed for a floating point hour', () => {
    expect(minSpeedOnTime([1,3,2], 2.7)).toBe(3);
    expect(minSpeedOnTime([5,3,4,6,2,2,7], 10.92)).toBe(4);
  });
  it('should return -1 if it is not possible to get there on time', () => {
    expect(minSpeedOnTime([1,3,2], 1.9)).toBe(-1);
  });
  it('should return the minimum speed for an hour equal to n', () => {
    expect(minSpeedOnTime([1,3,2], 3)).toBe(3);
  });
  it('should return the minimum speed of the final leg for long distance', () => {
    expect(minSpeedOnTime([1,1,100000], 2.01)).toBe(10000000);
  });
  it('should return minimum speed for one distance and a decimal hour', () => {
    expect(minSpeedOnTime([69], 4.6)).toBe(15);
  })
});