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
  const m = (coordinates[1][1] - coordinates[0][1]) / (coordinates[1][0] - coordinates[0][0]);
  const b = coordinates[0][1] - (m * coordinates[0][0]);

  for (let i = 2; i < coordinates.length; i++) {
    if (m === Infinity) {
      if (coordinates[i][0] !== coordinates[0][0]) return false;
    } else if (coordinates[i][1] !== m * coordinates[i][0] + b) return false;
  }

  return true;
};

module.exports = checkStraightLine;