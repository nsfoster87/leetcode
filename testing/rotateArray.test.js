const rotate = require('../problems/rotateArray.js');

describe('rotateArray', () => {
  it('should rotate the array in-place k times to the right', () => {
    let nums = [1,2,3,4,5,6,7];
    let k = 3;
    rotate(nums, k)
    expect(nums).toEqual([5,6,7,1,2,3,4]);

    nums = [-1,-100,3,99];
    k = 2;
    rotate(nums, k);
    expect(nums).toEqual([3,99,-1,-100]);
  });

  it('should work for k > nums.length', () => {
    let nums = [1,2,3];
    let k = 11;
    rotate(nums, k);
    expect(nums).toEqual([2,3,1]);
  })
});