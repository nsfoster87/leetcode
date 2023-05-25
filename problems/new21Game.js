// 837. New 21 Game

// Alice plays the following game, loosely based on the card game "21".

// Alice starts with 0 points and draws numbers while she has less than k points.
// During each draw, she gains an integer number of points randomly
// from the range [1, maxPts], where maxPts is an integer.
// Each draw is independent and the outcomes have equal probabilities.

// Alice stops drawing numbers when she gets k or more points.

// Return the probability that Alice has n or fewer points.

// Answers within 10-5 of the actual answer are considered accepted.

const new21Game = (n, k, maxPts) => {
  const equalProb = 1 / maxPts;
  let result = 0;
  const findLeaf = (currentTotal, currentDepth) => {
    for (let i = 1; i <= maxPts; i++) {
      const newTotal = currentTotal + i;
      if (newTotal >= k && newTotal <= n) result += equalProb**currentDepth;
      else if (newTotal < k) findLeaf(newTotal, currentDepth + 1);
      if (newTotal >= n) break;
    }
  }

  findLeaf(0, 1);
  return result;
};

module.exports = new21Game;