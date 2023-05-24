// 399. Evaluate Division

// You are given an array of variable pairs equations and an array of real numbers values,
// where equations[i] = [Ai, Bi] and values[i] represent the equation Ai / Bi = values[i].
// Each Ai or Bi is a string that represents a single variable.

// You are also given some queries, where queries[j] = [Cj, Dj] represents
// the jth query where you must find the answer for Cj / Dj = ?.

// Return the answers to all queries.
// If a single answer cannot be determined, return -1.0.

// Note: The input is always valid.
// You may assume that evaluating the queries will not result in division by zero
// and that there is no contradiction.

// Example 1:
// Input:
//   equations = [["a","b"],["b","c"]],
//   values = [2.0,3.0],
//   queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
//
// Output: [6.00000,0.50000,-1.00000,1.00000,-1.00000]
//
// Explanation:
// Given: a / b = 2.0, b / c = 3.0
// queries are: a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ?
// return: [6.0, 0.5, -1.0, 1.0, -1.0 ]
//
// Example 2:
// Input:
//    equations = [["a","b"],["b","c"],["bc","cd"]],
//    values = [1.5,2.5,5.0],
//    queries = [["a","c"],["c","b"],["bc","cd"],["cd","bc"]]
// Output: [3.75000,0.40000,5.00000,0.20000]
//
// Example 3:
// Input:
//    equations = [["a","b"]],
//    values = [0.5],
//    queries = [["a","b"],["b","a"],["a","c"],["x","y"]]
// Output: [0.50000,2.00000,-1.00000,-1.00000]


// Constraints:

// 1 <= equations.length <= 20
// equations[i].length == 2
// 1 <= Ai.length, Bi.length <= 5
// values.length == equations.length
// 0.0 < values[i] <= 20.0
// 1 <= queries.length <= 20
// queries[i].length == 2
// 1 <= Cj.length, Dj.length <= 5
// Ai, Bi, Cj, Dj consist of lower case English letters and digits.

const calcEquation = (equations, values, queries) => {
  const result = [];

  queries.forEach(query => {
    let visited = new Array(equations.length).fill(false);
    let targetRatios = { [query[1]]: 1 };
    let ratioVars = { [query[0]]: 1 };

    let changesMade = true;
    while (visited.includes(false) && changesMade) {
      changesMade = false;
      console.log({equations, values});
      for (let i = 0; i < equations.length; i++) {
        if (visited[i]) continue;
        const numerator = equations[i][0];
        const denominator = equations[i][1];

        // populing targetRatios
        if (numerator === query[1]) {
          targetRatios[denominator] = values[i];
          visited[i] = changesMade = true;
        } else if (denominator === query[1]) {
          targetRatios[numerator] = 1 / values[i];
          visited[i] = changesMade = true;
        }

        // if ratioVars contains one of the equation vars,
        if (ratioVars[numerator]) {
          console.log({query, numerator, denominator}, `ratioVars: ${JSON.stringify(ratioVars)}, targetRatios: ${JSON.stringify(targetRatios)}`);
          ratioVars[denominator] = ratioVars[numerator] * values[i];
          visited[i] = changesMade = true;
          if (targetRatios[denominator]) {
            console.log('returning ' + ratioVars[denominator] + '/' + targetRatios[denominator]);
            return result.push(ratioVars[denominator] / targetRatios[denominator]);
          }
        } else if (ratioVars[denominator]) {
          console.log({query, numerator, denominator}, `ratioVars: ${JSON.stringify(ratioVars)}, targetRatios: ${JSON.stringify(targetRatios)}`);
          ratioVars[numerator] = ratioVars[denominator] / values[i];
          visited[i] = changesMade = true;
          if (targetRatios[numerator]) {
            console.log('returning ' + ratioVars[numerator] + '/' + targetRatios[numerator]);
            return result.push(ratioVars[numerator] / targetRatios[numerator]);
          }
        }

        // if other var is in targetRatios,
        // return result.push(ratioVars[var1] / targetVars[var2])
        // ratrioVars[otherVar] = ratioVars[var] * values[otherVar] (or reciporical)
        // visited[i] = true;
      }
    }

    return result.push(-1);
  });

  console.log(result);
  return result;
};

module.exports = calcEquation;