const rotate = require('../problems/rotateArray.js');

describe('rotateArray', () => {
  it('should rotate the array in-place k times to the right', () => {
    let nums = [1,2,3,4,5,6,7];
    let k = 3;
    rotate(nums, k);
    let expected = [5,6,7,1,2,3,4];
    console.log(nums, expected);
    expect(nums).toEqual(expected);

    nums = [-1,-100,3,99];
    k = 2;
    rotate(nums, k);
    expected = [3,99,-1,-100];
    console.log(nums, expected);
    expect(nums).toEqual(expected);
  });

  it('should work for k > nums.length', () => {
    let nums = [1,2,3];
    let k = 11;
    rotate(nums, k);
    let expected = [2,3,1];
    console.log(nums, expected);
    expect(nums).toEqual(expected);
  })
});