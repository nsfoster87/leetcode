const canCompleteCircuit = require('../problems/gasStation');

describe('gasStation', () => {
    it('should return the index of the starting gas station', () => {
        let gas = [1,2,3,4,5];
        let cost = [3,4,5,1,2];
        expect(canCompleteCircuit(gas, cost)).toBe(3);

        gas = [5,1,2,3,4];
        cost = [4,4,1,5,1];
        expect(canCompleteCircuit(gas, cost)).toBe(4);
    });
    it('should return -1 if no gas station is viable', () => {
        const gas = [2,3,4];
        const cost = [3,4,3];
        expect(canCompleteCircuit(gas, cost)).toBe(-1);
    });
    it('should not simple return the index with the greatest leftover gas', () => {
        const gas = [5,8,2,8];
        const cost = [6,5,6,6];
        expect(canCompleteCircuit(gas, cost)).toBe(3);
    });
});