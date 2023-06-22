// 27. Remove Element

// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
// The order of the elements may be changed.
// Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k,
// to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements which are not equal to val.
// The remaining elements of nums are not important as well as the size of nums.
// Return k.

const removeElement = (nums, val) => {
  let k = nums.length;
  for (let i = 0; i < k; i++) {
    if (nums[i] === val) {
      while (nums[k-1] === val && k-1 > i) {
        k--;
      }
      if (k-1 > i) {
        nums[i] = nums[k-1];
        nums[k-1] = val;
      }
      k--;
    }
  }
  return k;
};