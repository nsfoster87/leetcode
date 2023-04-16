const { Node, swapNodes } = require('../problems/swappingNodes');

describe('swapNodes', () => {
  it('should swap the nodes of a linked list given the value of k', () => {
    // [1,2,3,4,5], k = 2 --> [1,4,3,2,5]
    let node1 = new Node(1);
    let node2 = new Node(2);
    let node3 = new Node(3);
    let node4 = new Node(4);
    let node5 = new Node(5);

    let head = node1;
    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node5;

    let k = 2;
    let result = swapNodes(head, k);
    expect(result.value).toBe(1);
    expect(result.next.value).toBe(4);
    expect(result.next.next.next.value).toBe(2);

    // [7,9,6,6,7,8,3,0,9,5], k = 5 --> [7,9,6,6,8,7,3,0,9,5];
    node1 = new Node(7);
    node2 = new Node(9);
    node3 = new Node(6);
    node4 = new Node(6);
    node5 = new Node(7);
    let node6 = new Node(8);
    let node7 = new Node(3);
    let node8 = new Node(0);
    let node9 = new Node(9);
    let node10 = new Node(5);

    head = node1;
    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node5;
    node5.next = node6;
    node6.next = node7;
    node7.next = node8;
    node8.next = node9;
    node9.next = node10;

    k = 5;
    result = swapNodes(head, k);
    expect(result.next.next.next.value).toBe(6);
    expect(result.next.next.next.next.value).toBe(8);
    expect(result.next.next.next.next.next.value).toBe(7);
  });
  it('should return the same list if k is exactly in the middle', () => {
    let node1 = new Node(1);
    let node2 = new Node(2);
    let node3 = new Node(3);
    let node4 = new Node(4);
    let node5 = new Node(5);

    let head = node1;
    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node5;

    let k = 3;
    let result = swapNodes(head, k);
    expect(result).toEqual(head);
  });
});