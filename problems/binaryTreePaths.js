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
  // do a depth first search,
  // finding all the leafs, while recording the path

  // for tree [1,2,3,4,5,null,null,null,null,10]:
  // from bottom up:
  // 10: returns ["10"]
  // 5 and 4: returns ["5->10"], ["4"]
  // 2 and 3: returns ["2->5->10", "2->4"], ["3"]
  // 1: returns ["1->2->5->10", "1->2->4", "1->3"]

  if (!root.left && !root.right) {
    return [`${root.val}`];
  } else if (root.left && root.right) {
    const paths = binaryTreePaths(root.left)
      .map(path => `${root.val}->${path}`)
      .concat(binaryTreePaths(root.right)
        .map(path => `${root.val}->${path}`));
    console.log(paths);
    return paths;
  } else {
    const child = root.left ? root.left : root.right;
    return binaryTreePaths(child).map(path => `${root.val}->${path}`);
  }
  // else if root has both children,
    // leftPath = binaryTreePaths(leftChild).map(path => "rootString -> path");
    // rightPath = binaryTreePaths(rightChild).map(path => "rootString -> path");
    // return leftPath.concat(rightPath);
  // else if root has left child:
    // return binaryTreePaths(leftChild).map(path => "rootString -> path");
  // else
    // return binaryTreePaths(rightChild).map(path => "rootString -> path");
};

module.exports = { binaryTreePaths, TreeNode };