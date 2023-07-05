const maxProfit = require('../problems/maxProfit');
const maxProfitActive = require('../problems/maxProfitActive');

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
  });
});

describe('maxProfitActive', () => {
  it('should return the maximum profit from buying and selling a stock on any days', () => {
    expect(maxProfitActive([7,1,5,3,6,4])).toBe(7);
    expect(maxProfitActive([1,3,5,4,10])).toBe(10);
    expect(maxProfitActive([1,2,3,4,5])).toBe(4);
  });
  it('should return zero profit if there is no profit potential', () => {
    expect(maxProfitActive([7,6,4,3,1])).toBe(0);
  });
});