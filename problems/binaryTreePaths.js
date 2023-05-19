// 257. Binary Tree Paths

// Given the root of a binary tree, return all root-to-leaf paths in any order.

// A leaf is a node with no children.

// Example 1.
//
//      (1)
//     /   \
//   (2)   (3)
//     \
//      (5)
//
// Input: root = [1,2,3,null,5]
// Output: ["1->2->5", "1->3"]

// Example 2.
//
// Input: root = [1]
// Output: ["1"]

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const binaryTreePaths = (root) => {
  if (!root.left && !root.right) return [`${root.val}`];
  if (root.left && root.right) {
    const leftPath = binaryTreePaths(root.left).map(path => `${root.val}->${path}`)
    const rightPath = binaryTreePaths(root.right).map(path => `${root.val}->${path}`);
    return leftPath.concat(rightPath);
  }
  const child = root.left ? root.left : root.right;
  return binaryTreePaths(child).map(path => `${root.val}->${path}`);
};

module.exports = { binaryTreePaths, TreeNode };