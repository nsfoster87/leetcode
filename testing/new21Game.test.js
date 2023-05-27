const new21Game = require('../problems/new21Game');

describe('new21Game', () => {
  const roundTo5Sigs = (num) => {
    return Math.round(num * 100000) / 100000;
  }
  it('should return 1.0 for pulling a single card', () => {
    expect(roundTo5Sigs(new21Game(10, 1, 10))).toBe(1);
  });
  it('should return correct probability for single card and n < maxPts', () => {
    expect(roundTo5Sigs(new21Game(6, 1, 10))).toBe(0.6);
  });
  it('should return correct probability for multiple cards, and n < maxPts', () => {
    expect(roundTo5Sigs(new21Game(6, 5, 10))).toBe((0.29282))
    expect(roundTo5Sigs(new21Game(21, 17, 10))).toBe(0.73278);
  });
  it('should return 0 for n = 0', () => {
    expect(roundTo5Sigs(new21Game(0, 1, 10))).toBe(0);
    expect(roundTo5Sigs(new21Game(0, 17, 10))).toBe(0);
  });
  it('should return 1.0 for k = 0 and n = 0', () => {
    expect(roundTo5Sigs(new21Game(0, 0, 1))).toBe(1);
    expect(roundTo5Sigs(new21Game(0, 0, 2))).toBe(1);
  });
  it('should execute in a reasonable amount of time', () => {
    expect(roundTo5Sigs(new21Game(421, 400, 47))).toExist();
  });
});