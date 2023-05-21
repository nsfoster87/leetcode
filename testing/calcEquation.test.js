const calcEquation = require('../problems/calcEquation');

describe('calcEquation', () => {
  it('should calculate all queries given array of equations and values', () => {
    let equations = [["a","b"],["b","c"]];
    let values = [2.0,3.0];
    let queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]];
    let expected = [6.0, 0.5, -1.0, 1.0, -1.0];
    expect(calcEquation(equations, values, queries)).toEqual(expected);

    equations = [["a","b"],["b","c"],["bc","cd"]];
    values = [1.5,2.5,5.0];
    queries = [["a","c"],["c","b"],["bc","cd"],["cd","bc"]];
    expected = [3.75, 0.4, 5.0, 0.2];
    expect(calcEquation(equations, values, queries)).toEqual(expected);

    equations = [["a","b"]];
    values = [0.5];
    queries = [["a","b"],["b","a"],["a","c"],["x","y"]];
    expected = [0.5, 2.0, -1.0, -1.0];
    expect(calcEquation(equations, values, queries)).toEqual(expected);
  });
  it('should work for a query that has 1st variable at end of equations array', () => {
    let equations = [["b","c"],["a","b"]];
    let values = [3.0,2.0];
    let queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]];
    let expected = [6.0, 0.5, -1.0, 1.0, -1.0];
    expect(calcEquation(equations, values, queries)).toEqual(expected);
  });
});