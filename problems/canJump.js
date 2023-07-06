// 55. Jump Game

// You are given an integer array nums. You are initially positioned at the array's first index,
// and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

const canJump = (nums) => {
  let biggestJump = nums[0];
  for (let i = 0; i < nums.length-1; i++) {
    biggestJump = Math.max(nums[i], biggestJump);
    if (biggestJump < 1) return false;
    biggestJump--;
  }

  return true;
};

module.exports = canJump;