// 135. Candy

// There are n children standing in a line. 
// Each child is assigned a rating value given in the integer array ratings.

// You are giving candies to these children subjected to the following requirements:

// Each child must have at least one candy.
// Children with a higher rating get more candies than their neighbors.
// Return the minimum number of candies you need to have to distribute the candies to the children.

const candy = (ratings) => {

  const candies = [];
  let prevRating = -1;

  for (let i = 0; i < ratings.length; i++) {
    if (prevRating < ratings[i]) {
      candies[i] = i !== 0 ? candies[i-1] + 1 : 1;
    } else {
      candies[i] = 1
      backPointer = i - 1;
      while (backPointer >= 0 && candies[backPointer] === candies[backPointer+1]) {
        if (ratings[backPointer] === ratings[backPointer+1]) break;
        candies[backPointer]++;
        backPointer--;
      }
    }
    prevRating = ratings[i];
  }

  return candies.reduce((sum, candy) => sum + candy);
};

module.exports = candy;