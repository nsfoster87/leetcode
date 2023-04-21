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
  let longest = 0;
  let result = "";

  for (let i = 1; i <= s.length; i++) {
    let substring = s.substring(0, i);
    for (let j = longest + 1; j <= substring.length; j++) {
      let lastLetters = substring.substr(substring.length - j, j).split('');
      let reversed = lastLetters.slice().reverse().join("");
      lastLetters = lastLetters.join("")
      if (lastLetters === reversed) {
        longest = lastLetters.length;
        result = lastLetters;
      }
    }
  }
  return result;
};

module.exports = longestPalindrome;