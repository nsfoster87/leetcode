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

  // get left substring for an even-numbered targetLength
  // if there is no room on the left side of the string, return null
  function getLeftSubstring(str, index, targetLength) {
    let leftIndex = index - Math.floor((targetLength+1)/2);
    if (leftIndex < 0) return null;
    return str.substr(index - Math.floor((targetLength)/2), targetLength);
  }

  // get right substring for an even-numbered targetLength
  // if there is no room on the right side of the string, return null
  function getRightSubstring(str, index, targetLength) {
    if (str.length - (index+1) < Math.floor((longest + 1) / 2)) return null;
    return str.substr(index - Math.floor((targetLength)/2) + 1, targetLength);
  }

  // get substring for an odd-numbered targetLength
  function getSubstring(str, index, targetLength) {
    let leftIndex = index - Math.floor(targetLength / 2);
    if (str.length - (index+1) < Math.floor(targetLength / 2)) return null;
    return str.substr(leftIndex, targetLength);
  }

  for (let i = 0; i < s.length; i++) {
    let updated = true;
    while(updated) {
      let targetLength = longest+1;
      if (targetLength % 2 === 0) {

        let substring = getLeftSubstring(s, i, targetLength);
        if (!substring) break;
        updated = checkAndUpdateResultFor(substring);

        // if (!updated) {
        //   substring = getRightSubstring(s, i, targetLength);
        //   if (!substring) return result;
        //   updated = updated || checkAndUpdateResultFor(substring);
        // }

        // also check the next odd-numbered length
        substring = getSubstring(s, i, targetLength+1);
        if (!substring) return result;
        updated = checkAndUpdateResultFor(substring);

      } else {
        let substring = getSubstring(s, i, targetLength);
        if (!substring) return result;
        updated = checkAndUpdateResultFor(substring);

        substring = getLeftSubstring(s, i, targetLength+1);
        if (!substring) break;
        updated = checkAndUpdateResultFor(substring);
      }
      console.log({s, i, longest, result, updated});
    }
  }
  return result;
};

module.exports = longestPalindrome;