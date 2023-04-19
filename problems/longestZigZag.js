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

const longestZigZag = (root) => {
  // iterate through every node in the tree,
  // use that node as a starting point, and find the
  // longestZigZag for each node

  // index of node children:
  // nodeIndex*2 + 1, nodeIndex*2 + 2

  // set a variable highest to 0
  // set direction to left

  // in an inner recursive function
  // for each element in root,
  // highest = max of highest and longestZigZagForRoot(root)

  // longestZigZagForRoot
    // set count to 0
    // while child at *direction* is not null,
      // increment count
      // set child at *direction* to currentNode
      // direction = !direction

    // return max of count and longestZigZagForRoot(root, !direction)

  return 0;
};

module.exports = longestZigZag;