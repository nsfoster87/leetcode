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

// RECURSIVE SOLUTION DIAGRAM EXAMPLE
// 'tbgatxgxxab'
// '-bbbbbbbbbb' biggest substring is b->b
// '-bbaaaaaaab' inside that, biggest is a->a
// '-bbaaxxxxab' inside that, biggest is x->x
// '-bbaaxgxxab' inside that, biggest is g
// '-bbatxgxxab' out of x, 2nd biggest in a is t
// '-bgatxgxxab' out of a, 2nd biggest in b is g
// 'tbgatxgxxab' out of b, 2nd biggest is t

// RECURSIVE OVERVIEW
// keep track of all indexes that have been *correctly* printed
// find the biggest substring, print it
// inside substring, while all indexes have not been correctly printed
// find the biggest substring, print it

const strangePrinter = (s) => {
  let rounds = 0;
  const correctPrints = new Array(s.length).fill(false);

  const print = (start, end, letter = null) => {
    // if letter, "print" letter from start to end AND find largest substring
    let somethingPrinted = false;
    let startIndexes = {};
    let largestSubstring = { letter: null, length: 0 }
    for (let i = start; i <= end; i++) {
      // "print" by checking against original string and marking that index
      if (letter === s[i]) {
        correctPrints[i] = true;
        somethingPrinted = true; // redundant to set multiple times
      }

      // find the largest substring by keeping track of start indexes of each letter

      // BUG
      // largest substring should account for "holes" where a previously printed letter
      // (not from this round) will break the length of the substring
      // 'abababa' currently returns 2

      if (correctPrints[i] === true) continue;
      if (startIndexes[s[i]] === undefined) startIndexes[s[i]] = i;
      if (i - startIndexes[s[i]] + 1 > largestSubstring.length) {
        largestSubstring = {
          letter: s[i],
          length: i - startIndexes[s[i]] + 1,
          start: startIndexes[s[i]],
          end: i
        };
      }
    }

    if (somethingPrinted) rounds++;

    // DEBUGGING
    const start_indexes = JSON.stringify(startIndexes);
    const sub = JSON.stringify(largestSubstring);
    console.log({s, somethingPrinted, start, end, letter, start_indexes, sub, rounds});

    if (!largestSubstring.letter) return;
    print(largestSubstring.start, largestSubstring.end, largestSubstring.letter);

    // also print remaining substrings
    if (start < largestSubstring.start) print(start, largestSubstring.start - 1);
    if (end > largestSubstring.end) print(largestSubstring.end + 1, end);
  };

  print(0, s.length - 1);
  return rounds;

};

module.exports = strangePrinter;