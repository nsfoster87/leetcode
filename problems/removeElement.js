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
    // k starts as nums.length
    // work through the array,
    // if I come across the value, I'm going to swap it with
    // a number at or near the end of the array whose index
    // is determined by the number of vals we've already found
    // before swapping, check that the number-to-be-swapped
    // is not also val
    // decrement k
    // increment i
    // do this while i is less than k
};