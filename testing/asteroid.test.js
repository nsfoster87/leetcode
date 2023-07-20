const asteroidCollision = require('../problems/asteroid');

describe('asteroidCollision', () => {
    it('should return an array of remaining asteroids after all collisions', () => {
        expect(asteroidCollision([5,10,-5])).toEqual([5,10]);
        expect(asteroidCollision([10,2,-5])).toEqual([10]);
        expect(asteroidCollision([10,2,-3,4,-5,5])).toEqual([10,5]);
    });
    it('should return an empty array if all asteroids have been destroyed', () => {
        expect(asteroidCollision([8,-8])).toEqual([]);
    });
    it('should return the proper array with non-colliding asteroids on the edges', () => {
        expect(asteroidCollision([-2,10,-5,3])).toEqual([-2,10,3]);
    });
    it('should destroy both asteroids if they are of equal size', () => {
        expect(asteroidCollision([-3, 4, 6, -6, -5, 5, -2])).toEqual([-3,-5,5]);
    });
});