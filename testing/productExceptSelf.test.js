const productExceptSelf = require('../problems/productExceptSelf');

describe('productExceptSelf', () => {
  it('should output an array of where arr[i] = product of inputs except nums[i]', () => {
    expect(productExceptSelf([1,2,3,4])).toEqual([24,12,8,6]);
    expect(productExceptSelf([-1,1,0,-3,3]).map(num => (Object.is(num, -0) ? 0 : num))).toEqual([0,0,9,0,0]);
  });
});