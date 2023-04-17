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
    expect(result.value).toBe(1);
    expect(result.next.value).toBe(2);
    expect(result.next.next.value).toBe(3);
    expect(result.next.next.next.value).toBe(4);
    expect(result.next.next.next.next.value).toBe(5);
  });
  it('should work for k of 1', () => {
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

    let k = 1;
    let result = swapNodes(head, k);
    expect(result.value).toBe(node5.value);
    expect(result.next.next.next.next.value).toBe(node1.value);
  });
  it('should work for value of k > LinkedList.size / 2', () => {
    // [7,9,6,6,7,8,3,0,9,5], k = 5 --> [7,9,6,3,7,8,6,0,9,5];
    let node1 = new Node(7);
    let node2 = new Node(9);
    let node3 = new Node(6);
    let node4 = new Node(6);
    let node5 = new Node(7);
    let node6 = new Node(8);
    let node7 = new Node(3);
    let node8 = new Node(0);
    let node9 = new Node(9);
    let node10 = new Node(5);

    let head = node1;
    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node5;
    node5.next = node6;
    node6.next = node7;
    node7.next = node8;
    node8.next = node9;
    node9.next = node10;

    let k = 7;
    let result = swapNodes(head, k);
    expect(result.next.next.next.value).toBe(3);
    expect(result.next.next.next.next.value).toBe(7);
    expect(result.next.next.next.next.next.value).toBe(8);
    expect(result.next.next.next.next.next.next.value).toBe(6);
    expect(result.next.next.next.next.next.next.next.value).toBe(0);
  });
  it('should work if left and right nodes are adjacent', () => {
    // [7,9,6,6,7,8,3,0,9,5], k = 5 --> [7,9,6,6,8,7,3,0,9,5];
    let node1 = new Node(7);
    let node2 = new Node(9);
    let node3 = new Node(6);
    let node4 = new Node(6);
    let node5 = new Node(7);
    let node6 = new Node(8);
    let node7 = new Node(3);
    let node8 = new Node(0);
    let node9 = new Node(9);
    let node10 = new Node(5);

    let head = node1;
    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node5;
    node5.next = node6;
    node6.next = node7;
    node7.next = node8;
    node8.next = node9;
    node9.next = node10;

    let k = 6;
    let result = swapNodes(head, k);
    expect(result.next.next.next.value).toBe(6);
    expect(result.next.next.next.next.value).toBe(8);
    expect(result.next.next.next.next.next.value).toBe(7);
    expect(result.next.next.next.next.next.next.value).toBe(3);
    expect(result.next.next.next.next.next.next.next.value).toBe(0);
  });
  it('should work for linkedList of size 2', () => {
    let node1 = new Node(100);
    let node2 = new Node(90);
    node1.next = node2;
    let k = 2;
    let head = node1;
    let result = swapNodes(head, k);
    expect(result.value).toBe(90);
    expect(result.next.value).toBe(100);
  });
  it('should work for linkedList of size 3 and k in middle', () => {
    let node1 = new Node(1);
    let node2 = new Node(2);
    let node3 = new Node(3);
    let head = node1;
    node1.next = node2;
    node2.next = node3;

    let k = 2;
    let result = swapNodes(head, k);
    expect(result.value).toBe(1);
    expect(result.next.value).toBe(2);
    expect(result.next.next.value).toBe(3);
  });
  it('should work for k = size - 1', () => {
    let node1 = new Node(47);
    let node2 = new Node(62);
    let node3 = new Node(39);
    let node4 = new Node(94);
    let node5 = new Node(90);
    let node6 = new Node(17);
    let node7 = new Node(74);
    let node8 = new Node(83);
    let node9 = new Node(70);
    let node10 = new Node(12);
    let node11 = new Node(99);
    let node12 = new Node(29);
    let node13 = new Node(73);
    let head = node1;
    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node5;
    node5.next = node6;
    node6.next = node7;
    node7.next = node8;
    node8.next = node9;
    node9.next = node10;
    node10.next = node11;
    node11.next = node12;
    node12.next = node13;

    let k = 12;
    let result = swapNodes(head, k);
    expect(result.value).toBe(47);
  })
});