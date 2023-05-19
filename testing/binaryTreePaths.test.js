const { TreeNode, binaryTreePaths } = require('../problems/binaryTreePaths');

describe('binaryTreePaths', () => {
  it('should return all root-to-leaf paths in any order', () => {
    let five = TreeNode(5, null, null);
    let three = TreeNode(3, null, null);
    let two = TreeNode(2, null, five);
    let root = TreeNode(1, two, three);

    let ouput = binaryTreePaths(root);
    let expected = ["1->2->5", "1->3"];
    expect(expected.every(path => output.contains(path))).toBe(true);

    let four = TreeNode(4, null, null);
    two.left = four;
    let ten = TreeNode(10, null, null);
    five.left = ten;

    output = binaryTreePaths([1,2,3,4,5,null,null,null,null,10]);
    expected = ["1->2->4", "1->2->5->10", "1->3"];
    expect(expected.every(path => output.contains(path))).toBe(true);
  });
  it('should return path for tree with one node', () => {
    expect(binaryTreePaths(TreeNode(1, null, null))).toEqual(["1"]);
  });
});