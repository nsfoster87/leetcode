const { TreeNode, binaryTreePaths } = require('../problems/binaryTreePaths');

describe('binaryTreePaths', () => {
  it('should return all root-to-leaf paths in any order', () => {
    let five = new TreeNode(5, null, null);
    let three = new TreeNode(3, null, null);
    let two = new TreeNode(2, null, five);
    let root = new TreeNode(1, two, three);

    let output = binaryTreePaths(root);
    let expected = ["1->2->5", "1->3"];
    console.log({expected, output});
    expect(expected.every(path => output.includes(path))).toBe(true);

    let four = new TreeNode(4, null, null);
    two.left = four;
    let ten = new TreeNode(10, null, null);
    five.left = ten;

    output = binaryTreePaths(root);
    expected = ["1->2->4", "1->2->5->10", "1->3"];
    console.log({expected, output});
    expect(expected.every(path => output.includes(path))).toBe(true);
  });
  it('should return path for tree with one node', () => {
    expect(binaryTreePaths(new TreeNode(1, null, null))).toEqual(["1"]);
  });
});