/* 5. Longest Palindromic Substring
 *
 * Given a string s, return the longest palindromic substring in s
 *
 * Example 1:
 * Input: s = "babad"
 * Output: "bab"
 * **aba is also  a valid answer
 *
 * Example 2:
 * Input: s = "cbbd"
 * Output: "bb"
 *
 */

const longestPalindrome = (s) => {
  // amanaplanacanalpanama
  // adabadabooooooba
  //
  // keep a variable longest
  // and a variable result
  // start with the first letter,
  // continuously add more letters to the end of the string
  // each time you add a letter
    // loop through from longest+1 to string length
    // see if you've got a new longest
  // return result
};

module.exports = longestPalindrome;