const { TreeNode, binaryTreePaths } = require('../problems/binaryTreePaths');

describe('binaryTreePaths', () => {
  it('should return all root-to-leaf paths in any order', () => {
    let ouput = binaryTreePaths([1,2,3,null,5]);
    let expected = ["1->2->5", "1->3"];
    expect(expected.every(path => output.contains(path))).toBe(true);

    output = binaryTreePaths([1,2,3,4,5,null,null,null,null,10]);
    expected = ["1->2->4", "1->2->5->10", "1->3"];
    expect(expected.every(path => output.contains(path))).toBe(true);
  });
  it('should return path for tree with one node', () => {
    expect(binaryTreePaths([1])).toEqual(["1"]);
  });
});