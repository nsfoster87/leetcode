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

  function checkAndUpdateResultFor(str) {
    if (str === str.slice().split('').reverse().join('')) {
      longest = Math.max(longest, str.length);
      result = str.length > result.length ? str : result;
      return true;
    }
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    let updated = true;
    while(updated) {
      let targetLength = longest+1;
      if (targetLength % 2 === 0) {

        // if there is no room on the left side of the string, break out
        let leftIndex = i - Math.floor((targetLength+1)/2);
        if (leftIndex < 0) break;

        // check the left-heavy even-numbered palindrome
        let substring = s.substr(i - Math.floor((targetLength)/2), targetLength);
        updated = checkAndUpdateResultFor(substring);

        // if there is no room on the right side of the string, we're done
        if (s.length - (i+1) < Math.floor((longest + 1) / 2)) return result;

        // check the right-heavy even numbered palindrome
        if (!updated) {
          substring = s.substr(i - Math.floor((targetLength)/2) + 1, targetLength);
          updated = updated || checkAndUpdateResultFor(substring);
        }

        if (s.length - (i+1) < Math.floor((targetLength+1)/2)) return result;
        substring = s.substr(leftIndex, targetLength+1);
        updated = checkAndUpdateResultFor(substring);

      } else {
        if (s.length - (i+1) < Math.floor(targetLength/2)) return result;
        let substring = s.substr(i - Math.floor((targetLength)/2), targetLength);
        updated = checkAndUpdateResultFor(substring);
      }
      console.log({s, i, longest, result, updated});
    }
  }
  return result;
};

module.exports = longestPalindrome;