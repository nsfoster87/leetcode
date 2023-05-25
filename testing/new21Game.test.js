const new21Game = require('../problems/new21Game');

describe('new21Game', () => {
  const roundTo5Sigs = (num) => {
    return Math.round(num * 10000) / 10000;
  }
  it('should return 1.0 for pulling a single card', () => {
    expect(roundTo5Sigs(new21Game(10, 1, 10))).toBe(1);
  });
  it('should return correct probability for single card and n < maxPts', () => {
    expect(roundTo5Sigs(new21Game(6, 1, 10))).toBe(0.6);
  });
  it('should return correct probability for multiple cards, and n < maxPts', () => {
    expect(roundTo5Sigs(new21Game(21, 17, 10))).toBe(0.73278);
  });
});