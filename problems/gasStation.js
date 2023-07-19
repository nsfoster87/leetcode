// 134. Gas Station

// There are n gas stations along a circular route, 
// where the amount of gas at the ith station is gas[i].

// You have a car with an unlimited gas tank and it costs 
// cost[i] of gas to travel from the ith station to 
// its next (i + 1)th station. 
// You begin the journey with an empty tank at one of the gas stations.

// Given two integer arrays gas and cost, return the starting gas station's index 
// if you can travel around the circuit once in the clockwise direction, 
// otherwise return -1. 
// If there exists a solution, it is guaranteed to be unique

const canCompleteCircuit = (gas, cost) => {
    const diffs = gas.map((station, i) => station - cost[i]);
    const [sum, max] = diffs.reduce((sumAndMaxIndex, diff, i, arr) => {
        const maxIndex = arr[sumAndMaxIndex[1]] >= diff ? sumAndMaxIndex[1] : i;
        return [sumAndMaxIndex[0] + diff, maxIndex];
    }, [0, 0]);
    return sum >= 0 ? max : -1;
};

module.exports = canCompleteCircuit;