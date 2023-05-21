const calcEquation = require('../problems/calcEquation');

describe('calcEquation', () => {
  it('should calculate all queries given array of equations and values', () => {
    let equations = [["a","b"],["b","c"]];
    let values = [2.0,3.0];
    let queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]];
    let expected = [6.0, 0.5, -1.0, 1.0, -1.0];
    expect(calcEquation(equations, values, queries)).toEqual(expected);

    equations = [["a","b"]];
    values = [0.5];
    queries = [["a","b"],["b","a"],["a","c"],["x","y"]];
    expected = [0.5, 2.0, -1.0, -1.0];
    expect(calcEquation(equations, values, queries)).toEqual(expected);
  });
});