// 122. Best Time to Buy and Sell Stock II

// You are given an integer array prices
// where prices[i] is the price of a given stock on the ith day.

// On each day, you may decide to buy and/or sell the stock.
// You can only hold at most one share of the stock at any time.
// However, you can buy it then immediately sell it on the same day.

// Find and return the maximum profit you can achieve.

// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
// Total profit is 4 + 3 = 7.

// Example 2:
// Input: prices = [1,2,3,4,5]
// Output: 4

// Example 3:
// Input: prices = [7,6,4,3,1]
// Output: 0

const maxProfit = (prices) => {
  // when it changes direction it would have been best to buy or sell before that
  // So as you're iterating through, look for the first inflection where the profit is higher than the day before,
  // then buy on the previous day
  // once bought, look for the first day where the stock is lower than the day before, and sell on the previous day.
  // continue til the end of the array
  return 0;
};

module.exports = maxProfit;