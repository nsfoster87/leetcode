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

    // increment once through the diffs array, then again back down
    // on the second iteration, we should have four pieces
    // of information at each index...
    // 1. an accumulated left side, and an accumulated right side
    // 2. what value is needed to make the left side work,
    //    and what value is needed to make the right side work.
    // In other words as we move up the array, 
    // keep track of what value is needed before starting the left array (index 0)
    // that can be gathered by the right array
    // Then, as we move back down, we look at each index,
    // while keeping an accumulator (aka what we need) from the right of the array.
    // if the index is negative, we rule it out,
    // but we still look at the accumulated value and see if it is enough
    // to offset what we need from the left side for that index.

    // [-1, 3, -2, -2, 1, 1] // diffs array
    // looping back down, by the time we hit index 4 (val=1)
    // we should know that in order to make a full loop, we need
    // index 4 through the rest of the array to
    // 1. be valid and
    // 2. be gt or equal to 2
    // (the 'needed' value for diffs[0]->diffs[3] is 2)
};

module.exports = canCompleteCircuit;