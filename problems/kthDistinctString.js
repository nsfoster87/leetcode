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
  // iterate through the array
    // if the item is in duplicates array,
      //continue
    // if item is in originals array,
      // add the item to duplicates array
      // continue
    // add item to originals array

  // start a variable count = 0
  // iterate through array
    // if item is not in duplicates,
    // count++
    // if count == k
      // return item

  // return ""
  return "";
};

module.exports = kthDistinct;