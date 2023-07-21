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
    
    // solution in O(n) time complexity: (loops through array 3 times):
    
    // first get an array of the difference between cost and gas
    const diffs = gas.map((station, i) => station - cost[i]);

    // initialize a leftSideNeeds var to 0;
    // initialize a leftAccumulator var to 0;
    // keep an array of what that particular index needs from wraparound
    // called leftSideNeeds
    // for each val in diffs:
      // needsArray.push(leftSideNeeds);
      // leftAccumulator += value
      // if leftAccumulator < leftSideNeeds
      // leftSideNeeds = leftAccumulator

    // let rightAccumulator = 0;
    // let rightSideNeeds = 0;
    // for each val in diffs from end to start:
      // rightAccumulator += val
      // if val < 0:
        // rightSideNeeds += val
      // else if val > 0
        // rightSideNeeds -= val
        // if rightSideNeeds < 0 rightSideNeeds = 0
      
      // if (rightAccumulator >= needsArray[index])
      // and val >= rightSideNeeds,
        // return index
    
    // return -1

};

module.exports = canCompleteCircuit;