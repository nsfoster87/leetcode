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
    // solution in O(n) time complexity: (loops through array 3 times):
    
    // first get an array of the difference between cost and gas
    const diffs = gas.map((station, i) => station - cost[i]);

    let leftSideNeeds = 0;
    let leftAccumulator = 0;
    const needsByIndex = [];

    diffs.forEach(diff => {
        needsByIndex.push(leftSideNeeds);
        leftAccumulator += diff;
        if (leftAccumulator < -leftSideNeeds) {
            leftSideNeeds = Math.abs(leftAccumulator);
        }
    });

    let rightAccumulator = 0;
    let rightSideNeeds = 0;
    for (let i = diffs.length - 1; i >= 0; i--) {
        rightAccumulator += diffs[i];
        rightSideNeeds -= diffs[i];
        if (rightSideNeeds < 0) rightSideNeeds = 0;
        // console.log({diffs, i, rightAccumulator, rightSideNeeds, leftSideNeeds: needsByIndex[i]});

        if (diffs[i] <= 0 && gas[i] === 0) continue;
        if (rightAccumulator >= needsByIndex[i] && diffs[i] >= rightSideNeeds) {
                return i;
        }
    }

    return -1;
};

module.exports = canCompleteCircuit;