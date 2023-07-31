// 664. Strange Printer

// There is a strange printer with the following two special properties:

// * The printer can only print a sequence of the same character each time.
// * At each turn, the printer can print new characters starting from and ending at any place
// and will cover the original existing characters.

// Given a string s, return the minimum number of turns the printer needed to print it.

// Example 1:
// Input: s = "aaabbb"
// Output: 2
// Explanation: Print "aaa" first and then print "bbb".

// Example 2:
// Input: s = "aba"
// Output: 2
// Explanation: Print "aaa" first and then print "b" from the second place of the string,
// which will cover the existing character 'a'.

const strangePrinter = (s) => {
  // 'aaabbcdbcbaabbcdcb' => 8
  //
  // 'aaaaaaaaaaaa------' i: 0,  letters: {a: 11} lastPrintedIndex of 'a' is 11
  // 'aaabbbbbbbaa------' i: 3,  letters: {a: 11, b: 9}, lastPrintedIndex = 9
  // 'aaabbcbbbbaa------' i: 5,  letters: {a: 11, b: 9} lastPrintedIndex = 9
  // 'aaabbcdbbbaa------' i: 6,  letters: {a: 11, b: 9} lastPrintedIndex = 9
  // 'aaabbcdbcbaa------' i: 8,  letters: {a: 11, b: 9, c: 8, d: 6}
  // 'aaabbcdbcbaabbbbbb' i: 12, letters: {a: 11, b: 17, c: 8, d: 6}
  // 'aaabbcdbcbaabbcccb' i: 14, letters: {a: 11, b: 17, c: 16, d: 6}
  // 'aaabbcdbcbaabbcdcb' i: 15, letters: {a: 11, b: 17, c: 16, d: 15}

  // keep a stack of lastPrintedIndexes, and once i > end of stack, pop it off
  // in the above example it would look like this:
  // [] => [11] => [11,9] => [11] => [] => [17] => [17, 16] => [17] => []

  // PSEUDOCODE SOLUTION
  // let rounds = 0;
  // const letters = {};
  // let lastPrintedIndexes = [];
  // const lettersMap = [];
  // for (let i = 0; i < s.length; i++) {
    // const currentLetter = s[i];

    // if we've passed a last printed index, remove it and the corresponding letter
    // if (lastPrintedIndexes && i > lastPrintedIndexes[lastPrintedIndexes.length-1]) {
      // lastPrintedIndexes.pop();
      // const letter = s[i-1];
      // delete letters[letter];
      // }

    // if letters[currentLetter] continue

    // if (!lastPrintedIndex.length) {
      // iterate backward from the end
      // until we find the currentLetter
      // push that lastIndex to lastPrintedIndexes
      // letters[currentLetter] = lastIndex
    // } else {
      // iterate backward from lastPrintedIndex[lastPrintedIndex.length - 1]
      // until we find the currentLetter
      // if lastIndex > i
        // push lastIndex to lastPrintedIndexes
        // letters[currentLetter] = lastIndex
    // }
    // rounds++;
  // }

};

module.exports = strangePrinter;