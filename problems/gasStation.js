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
    // this merely takes the largest starting difference between
    // gas and cost--which is flawed

    // for each element in the array,
    // take the element, plus the sum of the right array,
    // plus the sum of the left array

    // this can be done by creating a leftSum and rightSum,
    // looping through the array and accumulating
    const diffs = gas.map((station, i) => station - cost[i]);
    // a reverse array that maps each index in the diff array
    // to the cumulative sum of all the diffs to its right
    let totals = new Array(diffs.length);
    let leftSums = [];
    diffs.reduce((leftSum, diff) => {
        leftSums.push(leftSum);
        return leftSum + diff;
    }, 0);

    let sumFromRight = 0;
    for (let i = diffs.length - 1; i >= 0; i--) {
        sumFromRight += diffs[i];
        totals[i] = sumFromRight
    }
};

module.exports = canCompleteCircuit;