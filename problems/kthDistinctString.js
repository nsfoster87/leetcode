/* 2053. Kth Distinct String in an Array
 *
 * A distinct string is a string that is present only once in an array.
 *
 * Given an array of strings arr, and an integer k, return the kth
 * distinct string present in arr. If there are fewer than k distinct strings,
 * return an empty string "".
 *
 * Note that the strings are considered in the order in which they appear in the array.
 *
 * Example 1:
 * Input: arr = ["d", "b", "c", "b", "c", "a"], k = 2
 * Output: "a"
 * Explanation: The only distinct strings in arr are "d" and "a",
 * "d" appears 1st, so it is the 1st distinct string. "a" appears 2nd, so
 * it is the 2nd distinct string.
 *
 * Example 2:
 * Input: arr = ["aaa", "aa", "a"], k = 1
 * Ouput: "aaa"
 *
 * Example 3:
 * Input: arr = ["a", "b", "a"], k = 3
 * Output: ""
 *
 * Constraints:
 * 1 <= k <= arr.length <= 1000
 * 1 <= arr[i].length <= 5
 * arr[i] consists of lowercase English letters
 *
 */

const kthDistinct = (arr, k) => {
  const originals = [];
  const duplicates = [];
  for (let i = 0; i < arr.length; i++) {
    if (duplicates.includes(arr[i])) continue;
    if (originals.includes(arr[i]) && duplicates.push(arr[i])) continue;
    originals.push(arr[i]);
  }

  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    duplicates.includes(arr[i]) || count++;
    if (count === k) return arr[i];
  }
  return "";
};

module.exports = kthDistinct;