const merge = require('../problems/mergeSortedArray');

describe('mergeSortedArray', () => {
  it('should merge two arrays in non-decreasing order', () => {
    let nums1 = [1,2,3,0,0,0];
    let m = 3;
    let nums2 = [2,5,6];
    let n = 3;
    expect(merge(nums1, m, nums2, n)).toEqual([1,2,2,3,5,6]);

    nums1 = [7,8,10,0,0];
    m = 3;
    nums2 = [1,9];
    n = 2;
    expect(merge(nums1, m, nums2, n)).toEqual([1,7,8,9,10]);
  });
  it('should return a sorted array when one array is of size 0', () => {
    let nums1 = [1];
    let m = 1;
    let nums2 = [];
    let n = 0;
    expect(merge(nums1, m, nums2, n)).toEqual([1]);

    nums1 = [0];
    m = 0;
    nums2 = [1];
    n = 1;
    expect(merge(nums1, m, nums2, n)).toEqual([1]);
  });
  it('should work for negative numbers and zero values', () => {
    let nums1 = [-14, -2, 0, 6, 0, 0, 0];
    let m = 4;
    let nums2 = [-30, 1, 2];
    let n = 3;
    expect(merge(nums1, m, nums2, n)).toEqual([-30, -14, -2, 0, 1, 2, 6]);

    nums1 = [-14, -12, -10, -8, 0, 0, 0];
    nums2 = [-13,-11,-9];
    expect(merge(nums1,m,nums2,n)).toEqual([-14,-13,-12,-11,-10,-9,-8]);
  })
});