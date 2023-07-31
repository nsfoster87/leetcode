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

// SOLUTION DIAGRAM EXAMPLE
// 'aaabbcdbcbaabbcdcb' => 8
//
// 'aaaaaaaaaaaa------' i: 0,  letters: {a: 11}, lastPrintedIndexes: [11]
// 'aaabbbbbbbaa------' i: 3,  letters: {a: 11, b: 9}, lastPrintedIndexes: [11,9]
// 'aaabbcbbbbaa------' i: 5,  letters: {a: 11, b: 9}, lastPrintedIndexes: [11,9]
// 'aaabbcdbbbaa------' i: 6,  letters: {a: 11, b: 9}, lastPrintedIndexes: [11,9]
// 'aaabbcdbcbaa------' i: 8,  letters: {a: 11, b: 9}, lastPrintedIndexes: [11,9]
// 'aaabbcdbcbaabbbbbb' i: 12, letters: {b: 17}, lastPrintedIndexes: [17]
// 'aaabbcdbcbaabbcccb' i: 14, letters: {b: 17, c: 16}, lastPrintedIndexes: [17,16]
// 'aaabbcdbcbaabbcdcb' i: 15, letters: {b: 17, c: 16}, lastPrintedIndexes: [17,16]

// keep a stack of lastPrintedIndexes, and once i > end of stack, pop it off
// in the above example it would look like this:
// [] => [11] => [11,9] => [11] => [] => [17] => [17, 16] => [17] => []

const strangePrinter = (s) => {
  let rounds = 0;
  const letters = {};
  const lastPrintedIndexes = [];

  for (let i = 0; i < s.length; i++) {
    const currentLetter = s[i];

    // if we've passed a last printed index, remove it and the corresponding letter
    if (lastPrintedIndexes.length && i > lastPrintedIndexes[lastPrintedIndexes.length-1]) {
      lastPrintedIndexes.pop();
      delete letters[s[i-1]];
    }

    if (letters[currentLetter]) continue;

    if (!lastPrintedIndexes.length) {
      for (let j = s.length-1; j > i; j--) {
        if (s[j] === currentLetter) {
          lastPrintedIndexes.push(j);
          letters[currentLetter] = j;
          break;
        }
      }
    } else {
      const lastIndex = lastPrintedIndexes[lastPrintedIndexes.length - 1];
      let endOfCurrentPrint = i;
      const letterOfConcern = s[lastIndex];
      for (let j = i; s[j] !== letterOfConcern && j < lastIndex; j++) {
        if (s[j] === currentLetter) endOfCurrentPrint = j;
      }
      lastPrintedIndexes.push(endOfCurrentPrint);
      letters[currentLetter] = endOfCurrentPrint;
    }

    // DEBUGGING
    // const lettersString = JSON.stringify(letters);
    // console.log({i, letters: lettersString, lastPrintedIndexes, rounds: rounds+1});

    rounds++;
  }

  return rounds;
};

module.exports = strangePrinter;