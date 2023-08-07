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
  // keep track of current floor and current wall-height
  // at each height,
  // if height is less than current floor,
    // current floor = height
  // if height is greater than current floor and wall > 0,
    // work backwards adding water to total
    // up to current wall-height
    // if height is less than current wall-height,
      // set current floor to height
    // if it's greater,
      // set current wall-height to height, as well as floor

   // [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
   // i: 0, floor: 0, wall: 0, total: 0
   // i: 1, floor: 1, wall: 1, total: 0
   // i: 2, floor: 0, wall: 1, total: 0
   // i: 3...
     // since height[3] === 2 is greater than floor
     // working backwards until we hit wall...
     // index of wall === 1
     // (i-1) - index of wall = 1
     // 1 * wall = 1
     // total += ((i-1)-wallIndex)*wallHeight
   // i: 3, floor: 2, wall: 2, total: 1
   // i: 4, floor: 1, wall: 2, total: 1
   // i: 5, floor: 0, wall: 2, total: 1
   // i: 6...
     // height[6] === 1, which is greater than floor of 0
     // height[5] === 0, water += 1 - 0
     // height[4] === 1, so stop. add water to total
     // height < wall, so set floor to 1
   // i: 6, floor: 1, wall: 2, total: 2
   // i: 7...
     // height[7] === 2, which is greater than floor of 1,
     // walk backwards until we hit a wall greater than floor,
     // or wall
     // we hit wall at indexOfWall (3)
     // 7-1 - 3 = 3
     // multiply 3 * wall - floor (1), and add to total
     // height > wall, so wall is now height (3) and floor is now (3)
};

module.exports = trap;