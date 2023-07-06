// 55. Jump Game

// You are given an integer array nums. You are initially positioned at the array's first index,
// and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

const canJump = (nums) => {
  if (nums[0] >= nums.length - 1) return true;
  for (let i = nums[0]; i > 0; i--) {
    if (canJump(nums.slice(i))) return true;
  }

  return false;
};

module.exports = canJump;