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
  let total = 0;
  let highWall = 0;

  for (let i = 0; i < height.length; i++) {
    const currentHeight = height[i];
    if (i > 0 && currentHeight > height[i-1]) {
      if (highWall > 0) {
        const fillHeight = Math.min(highWall, currentHeight);
        for (let j = i - 1; height[j] < fillHeight; j--) {
          total += fillHeight - height[j];
          height[j] = fillHeight;
        }
      }
    }
    if (currentHeight > highWall) highWall = currentHeight;
  }

  return total;
};

module.exports = trap;