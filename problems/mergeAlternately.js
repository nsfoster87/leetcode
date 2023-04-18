/* 1768. Merge Strings Alternately
 *
 * You are given two strings word1 and word2.
 * Merge the strings by adding letters in alternating order,
 * starting with word1.
 * If a string is longer than the other, append the additional letters
 * onto the end of the merged string.
 *
 * Return the merged string
 *
 * Example 1:
 * Input: word1 = "abc", word2 = "pqr"
 * Output: "apbqcr"
 *
 * Example 2:
 * Input: word1: "ab", word2 = "pqrs"
 * Output: "aqbqrs"
 *
 */

const mergeAlternately = (word1, word2) => {
  const letters1 = word1.split('');
  const letters2 = word2.split('');
  const result = [];
  while (letters1.length && letters2.length) {
    result.push(letters1.shift());
    result.push(letters2.shift());
  }
  return letters1.length ?
    result.concat(letters1).join('') :
    result.concat(letters2).join('');
};

module.exports = mergeAlternately;