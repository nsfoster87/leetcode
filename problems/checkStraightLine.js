// 1232. Check if It Is a Straight Line

// You are given an array *coordinates, *coordinates[i] = [x, y],
// where [x, y] represents the coordinate of a point.
// Check if these points make a straight line in the XY plane

// Example 1:
// Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
// Output: true

// Example 2:
// Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
// Output: false

// Constraints:
//   * 2 <= coordinates.length <= 1000
//   * coordinates[i].length == 2
//   * -10^4 <= coordinates[i][0] (and [1]) <= 10^4
//   * coordinates contains no duplicate point

const checkStraightLine = (coordinates) => {
  // find the formula for the line given the first two coordinates
  // plug each subsequent coordinate into the formula
  // if any of them do not fit the formula,
    // return false
  return true;
};

module.exports = checkStraightLine;