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
        let gas = [5,8,2,8];
        let cost = [6,5,6,6];
        expect(canCompleteCircuit(gas, cost)).toBe(3);

        gas = [5,8,2,3,7,4];
        cost = [6,5,4,5,6,3];
        expect(canCompleteCircuit(gas, cost)).toBe(4);
    });
    it('should work for a large n size, returning first index', () => {
        let gas = new Array(10000).fill(0);
        let cost = new Array(10000).fill(0);
        gas[0] = 2;
        cost[1] = 1;
        expect(canCompleteCircuit(gas, cost)).toBe(0);
    });
    it('return index for one input where gas is equal to cost', () => {
        expect(canCompleteCircuit([2], [2])).toBe(0);
    })
});