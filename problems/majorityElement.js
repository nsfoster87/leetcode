// 169. Majority Element

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times.
// You may assume that the majority element always exists in the array.

const majorityElement = (nums) => {
  const counts = {};
  for (let i = 0; i < nums.length; i++) {
    counts[nums[i]] = counts[nums[i]] ? counts[nums[i]] + 1 : 1;
    if (counts[nums[i]] > nums.length / 2) return nums[i];
  }
}