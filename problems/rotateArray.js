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
  k = k % nums.length;
  let count = 0;
  let temp;
  for (let i = 0; i < nums.length && count < nums.length; i++) {
    let currentNum = nums[i];
    let destination = (i + k) % nums.length;
    let currentIndex = destination;
    while (i !== currentIndex && count < nums.length) {
      currentIndex = destination;
      temp = nums[destination];
      nums[destination] = currentNum;
      count++;
      currentNum = temp;
      destination = (currentIndex + k) % nums.length;
    }
  }
};

module.exports = rotate;