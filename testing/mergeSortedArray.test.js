const merge = require('../problems/mergeSortedArray');

describe('mergeSortedArray', () => {
  it('should merge two arrays in non-decreasing order', () => {
    let nums1 = [1,2,3,0,0,0];
    let m = 3;
    let nums2 = [2,5,6];
    let n = 3;
    expect(merge(nums1, m, nums2, n)).toEqual([1,2,2,3,5,6]);
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
});