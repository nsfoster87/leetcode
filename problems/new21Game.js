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
  // loop through from 1 to maxPts
  // for each number,
    // if total >= k
      // if total < n,
        // add equalProb to the power of depth of leaf to result
    // else if total < k,
      // drill down recursively until hitting a "leaf"

  // Outside hold result
  let result = 0;
  // Inner recursive function takes in a currentTotal and currentDepth
  const findLeaf = (currentTotal, currentDepth) => {

  }

  return result;
};

module.exports = new21Game;