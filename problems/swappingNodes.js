// 1721. Swapping Nodes in a Linked List

/* You are given the head of a linked list, and an integer k.
 *
 * Return the head of the linked list after swapping the values of the kth
 * node from the beginning and the kth node from the end (the list is 1-indexed).
 *
 * Example 1:
 * (1) -> (2) -> (3) -> (4) -> (5)
 * (1) -> (4) -> (3) -> (2) -> (5)
 * Input: head = [1,2,3,4,5], k = 2
 * Output: [1,4,3,2,5]
 *
 * Example 2:
 * Input: head = [7,9,6,6,7,8,3,0,9,5], k = 5
 * Output: [7,9,6,6,8,7,3,0,9,5]
 *
 * Constraints:
 *   The number of nodes in the list is n
 *   1 <= k <= n <= 10^5
 *   0 <= Node.val <= 100
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const swapNodes = function(head, k) {
  // find left node to swap
  const result = head;
  let pointer = head;
  let leftPrev = head;
  let count = 1;
  while (count < k) {
    leftPrev = pointer;
    pointer = pointer.next;
    count++;
  }
  let left = pointer;

  // find right node to swap
  pointer = head;
  let kaway = pointer;
  let rightPrev = pointer;
  for (let i = 1; i < k; i++) {
    kaway = kaway.next;
  }
  while (kaway && kaway.next !== null) {
    rightPrev = pointer;
    pointer = pointer.next;
    kaway = kaway.next;
  }
  let right = pointer;

  console.log(`left: ${left.value}, right: ${right.value}, leftPrev: ${leftPrev.value}, rightPrev: ${rightPrev.value}`);

  // start swap process
  if (left === right) return head;

  let leftNext = left.next === right ? left : left.next;
  if (rightPrev === head && rightPrev === right) {
    head = left;
  } else {
    rightPrev.next = rightPrev === left ? rightPrev.next : left;
  }
  k === 1 ? head = right : leftPrev.next = right;
  left.next = right.next;
  right.next = leftNext;

  return head;
};

module.exports = { Node, swapNodes };