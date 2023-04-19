const longestZigZag = require('../problems/longestZigZag');

describe('longestZigZag', () => {
  it('should output the longest zigzag path of a binary tree', () => {
    let root = [1,null,1,1,1,null,null,1,1,null,1,null,null,null,1,null,1];
    expect(longestZigZag(root)).toBe(3);

    root = [1,1,1,null,1,null,null,1,1,null,1];
    expect(longestZigZag(root)).toBe(4);
  });
  it('should return 0 for a tree with one node', () => {
    expect(longestZigZag([1])).toBe(0);
  });
});