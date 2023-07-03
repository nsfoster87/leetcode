const maxProfit = require('../problems/maxProfit');

describe('maxProfit', () => {
  it('should return maximum profit given stock prices for each day', () => {
    const prices = [7,1,5,3,6,4];
    expect(maxProfit(prices)).toBe(5);
  });
  it('should return zero if there is no profit potential', () => {
    const prices = [7,6,4,3,1];
    expect(maxProfit(prices)).toBe(0);
  });
  it('should return max profit if stock price fluctuates up and down', () => {
    const prices = [7,4,2,5,3,8,1];
    expect(maxProfit(prices)).toBe(6);
  })
});