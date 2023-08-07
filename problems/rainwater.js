// 42. Trapping Rain Water

// Given n non-negative integers representing an elevation map
// where the width of each bar is 1, compute how much water it
// can trap after raining.

// Example 1:
//
// 3-
// 2-       X
// 1-   X   XX X
// 0- X XX XXXXXX
//
// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map is represented by the array 'height'
//   In this case, 6 units of rainwater are being trapped

// Example 2:
// Input: height = [4,2,0,3,2,5]
// Ouput: 9

// Constraints:
// n == height.length
// 1 <= n <= 2*10^4
// 0 <= height[i] <= 10^5

const trap = (height) => {
  // approach:
  // keep track of total
  // keep track of an object that has current heights,
  // as well as that height's gap count
  // at each new index,
    // if water needs to be filled in,
      // fill it in from the bottom up:
      // take a row minus the next lowest row
      // and multiply it by the gap count
      // then remove that row from the object
      // (up to rows < current index's value)
      // add this total to the total
    // set gaps[height[index]] = 0
    // increment all remaining numbers in gaps
    // (only gaps heigher than current block height should remain)
};

module.exports = trap;