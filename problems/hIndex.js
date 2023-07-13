// 274. H-Index

// Given an array of integers citations where citations[i] is the number of citations
// a researcher received for their ith paper,
// return the researcher's h-index.

// According to the definition of h-index on Wikipedia:
// The h-index is defined as the maximum value of h such that
// the given researcher has published at least h papers that have each been cited
// at least h times.

// Example 1:
// Input: citations = [3, 0, 6, 1, 5]
// Output: 3

// Example 2:
// Input: citations = [1, 3, 1]
// Output: 1

// [5, 7, 1, 1, 2, 0, 4, 3, 6, 1, 2, 0, 5, 12, 10, 3, 7]
// Output: 5

const hIndex = (citations) => {
  // keep an object of counts and a counter currentResult
  // keep track of maxIndex
  // for each number in citations,
    // if number is greater than h,
      // update number in counter, and all numbers below it
      // and greater than h
      // also check if we need to update maxIndex
  // return h
};

module.exports = hIndex;