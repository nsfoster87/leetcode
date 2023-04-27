const kthDistinct = require('../problems/kthDistinctString');

describe('kthDistinct', () => {
  it('should return the kth distinct string in an array', () => {
    expect(kthDistinct(["d", "b", "c", "b", "c", "a"], 2)).toBe("a");
    expect(kthDistinct(["aaa", "aa", "a"], 1)).toBe("aaa");
  });
  it('should return "" if there are fewer than k distinct strings', () => {
    expect(kthDistinct(["a", "b", "a"], 3)).toBe("");
  });
});