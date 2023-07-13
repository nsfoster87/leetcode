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
  let h = 0;
  let counts = {};
  let maxIndex = 0;

  citations.forEach(num => {
    // only update h once per index
    let updated = false;
    if (num > h) {
      if (!counts[num]) {
        // if the citation number is the highest so far...
        if (num > maxIndex) {
          maxIndex = num;
          counts[num] = 1;
        } else {
          // set the count of this citation number to 1 more than the lowest
          // next greatest citation number in counts
          for (let lowestNext = num + 1; lowestNext < maxIndex; lowestNext++) {
            if (counts[lowestNext]) {
              counts[num] = counts[lowestNext] + 1;
              break;
            }
          }
        }
      }

      if (!updated) {
        if (counts[num] > h) {
          h++;
          updated = true;
        }
      }

      // increment all the other citation numbers from the new number
      // only through h (we no longer care about numbers lower than h)
      for (let j = num - 1; j > h; j--) {
        if (counts[j]) {
          counts[j]++;
          if (!updated) {
            if (counts[j] > h) {
              h++;
              updated = true;
            }
          }
        }
      }
    }
    console.log({num, h});
    console.log(JSON.stringify(counts));
  });

  return h;
};

module.exports = hIndex;