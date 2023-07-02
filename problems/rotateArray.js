// 189. Rotate Array

// Given an integer array nums, rotate the array to the right by k steps,
// where k is non-negative

// Example 1.
// Input: nums = [1, 2, 3, 4, 5, 6, 7], k = 3
// Output: [5, 6, 7, 1, 2, 3, 4]

// Example 2.
// Input: nums = [-1, -100, 3, 99], k = 2
// Output: [3, 99, -1, -100]

const rotate = (nums, k) => {
  // k = k % nums.length;
  // keep a count variable to keep track of swaps
  // keep a temporary variable to hold the next element to swap
  // iterate through nums while count is less than nums.length
    // currentNum = nums[i]
    // currentIndex = i;
    // destination is (currentIndex + k) % nums.length
    // while i !== destination && count < nums.length
      // temp = nums[destination]
      // destination = currentNum
      // count++
      // currentNum = temp
      // destination is (currentIndex + k) % nums.length

};

module.exports = rotate;