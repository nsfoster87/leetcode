/* 1372. Longest ZigZag Path in a Binary Tree
 *
 * You are given the root of a binary tree
 *
 * A ZigZag path for a binary tree is defined as follows:
 *
 * * Choose any node in the binary tree and a direction (right or left).
 * * If the current direction is right, move to the right child of the current
 *   node; otherwise, move to the left child
 * * Change the direction from the right to the left or from left to right.
 * * Repeat the second and third steps until you can't move in the tree.
 *
 * Zigzag length is defined as the number of nodes visited - 1. (A single node
 * has a length of 0).
 *
 * Return the longest ZigZag path contained in that tree.
 *
 * Example 1:
 *
 *     (1)
 *        \
 *       *(1)*
 *       /   \
 *    (1)   *(1)*
 *          /   \
 *       *(1)*   (1)
 *           \
 *           *(1)*
 *               \
 *                (1)
 *
 * Input: root = [1,null,1,1,1,null,null,1,1,null,1,null,null,null,1,null,1]
 * Output: 3
 *
 * Example 2:
 * Input: root = [1]
 * Output: 0
 *
 */

class TreeNode (val, left, right) {
  constructor() {
    this.val = (val ? - : val);
    this.left = (left ? null : left);
    this.right = (right ? null : right);
  }
}

const longestZigZag = (root) => {
  // iterate through every node in the tree,
  // use that node as a starting point, and find the
  // longestZigZag for each node

  // index of node children:
  // nodeIndex*2 + 1, nodeIndex*2 + 2

  const dirs = { left: 0, right: 1 }

  let highest = 0;

  root.forEach((node, index) => {
    const newRoot = root.slice(index);
    highest = Math.max(highest, longestZigZagForRoot(newRoot));
  });

  function longestZigZagForRoot (currentRoot, direction = dirs.left) {
    const isRightSide = direction;
    let count = 0;
    let childIndex = direction ? 1 : 2;
    while (currentRoot[childIndex]) {
      count++;
      direction = !direction;
      childIndex = direction ? childIndex*2 + 1 : childIndex*2 + 2;
    }
    if (isRightSide) return count;
    return Math.max(count, longestZigZagForRoot(currentRoot, dirs.right));
  }
  // longestZigZagForRoot
    // set count to 0
    // while child at *direction* is not null,
      // increment count
      // set child at *direction* to currentNode
      // direction = !direction

    // return max of count and longestZigZagForRoot(root, !direction)

  return highest;
};

module.exports = { longestZigZag, TreeNode };