const mergeAlternately = require('../problems/mergeAlternately');

describe('mergeAlternately', () => {
  it('should merge two strings into one string by alternating letters', () => {
    const word1 = "abc";
    const word2 = "pqr";
    expect(mergeAlternately(word1, word2)).toBe("apbqcr");

    const word3 = "reliable";
    const word4 = "courting";
    expect(mergeAlternately(word3, word4)).toBe("rceoluiratbilneg");
  });
  it('should append remaining letters of larger string to end of word', () => {
    const word1 = "ab";
    const word2 = "pqrs";
    expect(mergeAlternately(word1, word2)).toBe("apbqrs");
    expect(mergeAlternately(word2, word1)).toBe("paqbrs");
  });
  it('should handle empty string inputs for either or both string', () => {
    const empty = "";
    const full = "aword";
    expect(mergeAlternately(empty, full)).toBe(full);
    expect(mergeAlternately(full, empty)).toBe(full);
    expect(mergeAlternately(empty, empty)).toBe(empty);
  });
});