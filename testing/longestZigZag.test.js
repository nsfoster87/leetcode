const { longestZigZag, TreeNode } = require('../problems/longestZigZag');

describe('longestZigZag', () => {
  it('should output the longest zigzag path of a binary tree', () => {
    // [1,null,1,1,1,null,null,1,1,null,1,null,null,null,1,null,1];
    let node8 = TreeNode(1, null, null);
    let node7 = TreeNode(1, null, node8);
    let node6 = TreeNode(1, null, null);
    let node5 = TreeNode(1, null, node7);
    let node4 = TreeNode(1, node5, node6);
    let node3 = TreeNode(1, null, null);
    let node2 = TreeNode(1, node3, node4);
    let root = TreeNode(1, null, node2);

    expect(longestZigZag(root)).toBe(3);

    // [1,1,1,null,1,null,null,1,1,null,1];
    node7 = TreeNode(1, null, null);
    node6 = TreeNode(1, null, null);
    node5 = TreeNode(1, null, node7);
    node4 = TreeNode(1, node5, node6);
    node3 = TreeNode(1, null, null);
    node2 = TreeNode(1, null, node4);
    root = TreeNode(1, node2, node3);
    expect(longestZigZag(root)).toBe(4);
  });
  it('should return 0 for a tree with one node', () => {
    expect(longestZigZag(TreeNode(1, null, null))).toBe(0);
  });
});