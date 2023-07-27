// 135. Candy

// There are n children standing in a line. 
// Each child is assigned a rating value given in the integer array ratings.

// You are giving candies to these children subjected to the following requirements:

// Each child must have at least one candy.
// Children with a higher rating get more candies than their neighbors.
// Return the minimum number of candies you need to have to distribute the candies to the children.

const candy = (ratings) => {
  // [7, 1, 6, 5, 4, 5, 5, 0, 1, 3] (ex ratings)
  // 
  // keep an array of the amount of candy doled out to each child.
  // initialize a prevRating = -1
  // for each rating in ratings:
    // if the previous rating is lower than current
      // if current === 0, set candies[current] = 1
      // else set candies[current] equal to candies[current-1] + 1
    // if the previous rating is gte current
      // set candies[current] = 1
      // set backPointer = current-1
      // while (backPointer >= 0 && candies[backPointer] === candies[current])
        // increment candies[backPointer]
        // backPointer--
    // if prevRating is equal to current
      // determine which side has a longer grouping of larger
      // numbers, and make that one lesser
    // set prevRating equal to ratings[current]
      
};

module.exports = candy;