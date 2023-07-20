// 725. Asteroid Collision

// We are given an array asteroids of integers representing asteroids in a row.

// For each asteroid, the absolute value represents its size, a
// nd the sign represents its direction (positive meaning right, negative meaning left). 
// Each asteroid moves at the same speed.

// Find out the state of the asteroids after all collisions. 
// If two asteroids meet, the smaller one will explode. 
// If both are the same size, both will explode. 
// Two asteroids moving in the same direction will never meet.

const asteroidCollision = (asteroids) => {
    // create a result array
    // iterate through the asteroids array
    // for each asteroid
      // if asteroid is positive,
        // add it to the result array
      // if asteroid is negative
        // if results array is empty or last elem is negative,
        // add asteroid to result array
        // else
        // while abs(asteroid) is bigger than or equal to the last element in the results array and last elem is > 0,
          // pop off last result
          // if they're equal, break;
    // return result
};

module.exports = asteroidCollision;