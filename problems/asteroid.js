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
    const result = [];
    asteroids.forEach(asteroid => {
        // positive asteroids have no leftward effect
        if (asteroid > 0) {
            result.push(asteroid);
        } else {
            let destroyed = false;
            while (result.length) {
                if (result[result.length-1] < 0) break;
                if (result[result.length-1] <= Math.abs(asteroid)) {
                    const lastAsteroid = result.pop();
                    if (lastAsteroid === Math.abs(asteroid)) {
                        destroyed = true;
                        break;
                    }
                } else {
                    destroyed = true;
                    break;
                }
            }
            if (!destroyed) result.push(asteroid);
        }
    });
    return result;
};

module.exports = asteroidCollision;