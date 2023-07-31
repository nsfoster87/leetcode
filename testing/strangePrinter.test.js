const strangePrinter = require('../problems/strangePrinter');

describe('strangePrinter', () => {
  it('should return the number of turns the printer needs to take to print string s', () => {
    expect(strangePrinter('aaabbb')).toBe(2);
    expect(strangePrinter('aba')).toBe(2);
    expect(strangePrinter('abababa')).toBe(4);
    expect(strangePrinter('aaabbcdbcbaabbcdcb')).toBe(8);
  });
  it('should return 1 for an input string of one character', () => {
    expect(strangePrinter('a')).toBe(1);
  });
});