const swapNodes = require('../problems/swappingNodes');

describe('swapNodes', () => {
  it('should swap the nodes of a linked list given the value of k', () => {
    let head = [1,2,3,4,5];
    let k = 2;
    expect(swapNodes(head, k)).toEqual([1,4,3,2,5]);

    head = [7,9,6,6,7,8,3,0,9,5];
    k = 5;
    expect(swapNodes(head, k)).toEqual([7,9,6,6,8,7,3,0,9,5]);
  });
  it('should return the same list if k is exactly in the middle', () => {
    let head = [1,2,3,4,5];
    let k = 3;
    expect(swapNodes(head, k)).toEqual(head);
  });
});