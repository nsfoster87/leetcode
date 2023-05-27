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
  // For each number of cards,
  // Find the number of permutations that add up to x where
  // k <= x <= n
  // multiply x by (1/maxPts)^numberOfCards
  // and add to total

  // new solution algorithm:
  // count the number of ways you can add up to sums between k and n,
  // and multiply equalProb to the power of that sum's number of additives.
  // for example:
  // k = 5, n = 6, maxPts = 10:
  // 1 + 1 + 1 + 1 + 1 = 5  ->  result += 0.1**5
  // 1 + 1 + 1 + 1 + 2 = 6  ->  result += 0.1**5
  // 1 + 4                  ->  result += 0.1**2

  if (k === 0) return k <= n;

  const equalProb = 1 / maxPts;
  let result = 0;
  let countAtDepth = {};
  const findLeaf = (currentTotal, currentDepth) => {
    for (let i = 1; i <= maxPts; i++) {
      const newTotal = currentTotal + i;
      if (newTotal >= k && newTotal <= n) {
        const oldResult = result;
        result += equalProb**currentDepth;
        countAtDepth[currentDepth] = countAtDepth[currentDepth] ? countAtDepth[currentDepth] + 1 : 1;
        // console.log(`k=${k},n=${n}, result: ${oldResult} + ${equalProb}**${currentDepth} = ${result}`);
      } else if (newTotal < k) {
        if (currentDepth > 10) break;
        findLeaf(newTotal, currentDepth + 1);
      }
      if (newTotal >= n) break;
    }
  }

  findLeaf(0, 1);
  console.log(JSON.stringify(countAtDepth));
  return result;
};

module.exports = new21Game;