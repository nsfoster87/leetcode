const { TreeNode, binaryTreePaths } = require('../problems/binaryTreePaths');

describe('binaryTreePaths', () => {
  it('should return all root-to-leaf paths in any order', () => {
    const ouput = binaryTreePaths([1,2,3,null,5]);
    const expected = ["1->2->5", "1->3"];
    expect(expected.every(path => output.contains(path))).toBe(true);
  });
  it('should return path for tree with one node', () => {
    expect(binaryTreePaths([1])).toEqual(["1"]);
  });
});