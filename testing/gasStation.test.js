const gasStation = require('../problems/gasStation');

describe('gasStation', () => {
    it('should return the index of the starting gas station', () => {
        const gas = [1,2,3,4,5];
        const cost = [3,4,5,1,2];
        expect(gasStation(gas, cost)).toBe(3);
    });
    it('should return -1 if no gas station is viable', () => {
        const gas = [2,3,4];
        const cost = [3,4,3];
        expect(gasStation(gas, cost)).toBe(-1);
    });
});