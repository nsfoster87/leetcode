// 1351. Count Negative Numbers in a Sorted Matrix

// Given an m x n matrix grid which is sorted in non-increasing order both
// row-wise and column-wise, return the number of negative numbers in the grid

// Example 1:
// Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// Output: 8
// Explanation: There are 8 negatives number in the matrix.

// Example 2:
// Input: grid = [[3,2],[1,0]]
// Output: 0

const countNegatives = (grid) => {
  let nStart = -1;
  let count = 0;

  // iterate backwards through the outer array,
  for (let i = grid.length - 1; i >= 0; i--) {

    // iterate backwards through the inner array
    for (let j = grid[i].length - 1; j > nStart; j--) {
      if (grid[i][j] >= 0) {
        if (j === grid[i].length - 1) return count;
        nstart = j;
      } else {
        count++;
      }
    }
  }

  return count;
};

module.exports = countNegatives;