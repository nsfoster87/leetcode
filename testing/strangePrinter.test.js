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
  it('should not always assume first optimal print starts with first letter', () => {
    expect(strangePrinter('tbgtgb')).toBe(4);
  });
  it('should be able to handle nesting of prints that do not start with first letter', () => {
    expect(strangePrinter('tbggaatggxggaaaaaabb')).toBe(7);
    expect(strangePrinter('tbgatxgxxab')).toBe(7);
  });
});