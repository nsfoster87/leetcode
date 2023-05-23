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
  it('should be able to string together ratios more than once removed', () => {
    let equations = [["x1","x2"],["x2","x3"],["x3","x4"],["x4","x5"]];
    let values = [3.0, 4.0, 5.0, 6.0];
    let queries = [["x1","x5"],["x5","x2"],["x2","x4"],["x2","x2"],["x2","x9"],["x9","x9"]];
    let expected = [360.00000,0.00833,20.00000,1.00000,-1.00000,-1.00000];
    expect(calcEquation(equations, values, queries)).toEqual(expected);

    equations = [["g","y"],["a","b"],["c","d"],["b","c"],["a","g"],["f","e"],["e","d"],["g","x"],["q","u"]];
    values = [20, 3, 5, 4, 2, 10, 1/6, 2, 7];
    queries = [["a", "e"], ["a","a"], ["y","y"], ["a","z"], ["z","z"], ["b","c"], ["c","b"],["a","y"]];
    expected = [360, 1, 1, -1, -1, 4, 0.25, 40];
  });
});