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
  // initialize a nStart to be 0
  // initialize a count variable to 0
  //
  // iterate backwards through the outer array,
    // iterate backwards through the inner array,
    // from innerArray.length to nStart
      // if a number is >= 0,
        // if it's the final index of the array (innerArray.length - 1),
          // return count
        // that column is the new nStart and no longer needs to be checked
        // by any subsequent array iterations
      // else
        // count++

  return 0;
};

module.exports = countNegatives;