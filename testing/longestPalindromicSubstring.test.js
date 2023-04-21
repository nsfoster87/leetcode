const longestPalindrome = require('../problems/longestPalindromicSubstring');

describe('longestPalindrome', () => {
  it('should return the longest palindromic substring of an input string', () => {
    expect(longestPalindrome("babad")).toBe("bab");
    expect(longestPalindrome("cbbd")).toBe("bb");
    expect(longestPalindrome("amanaplanacanalpanama")).toBe("amanaplanacanalpanama");
    expect(longestPalindrome("babadabooooooa")).toBe("oooooo");
    expect(longestPalindrome("babadaboba")).toBe("badab");
  });
  it('should return the first letter for a string with no palindromic substring', () => {
    expect(longestPalindrome("abcdefg")).toBe("a");
  });
  it('should run efficiently for long input strings', () => {
    let input = "ibvjkmpyzsifuxcabqqpahjdeuzaybqsrsmbfplxycsafogotliyvhxjt";
    input += "krbzqxlyfwujzhkdafhebvsdhkkdbhlhmaoxmbkqiwiusngkbdhlvxdyvnjrzvx";
    input += "mukvdfobzlmvnbnilnsyrgoygfdzjlymhprcpxsnxpcafctikxxybcusgjwmfklkf"
    input += "fehbvlhvxfiddznwumxosomfbgxoruoqrhezgsgidgcfzbtdftjxeahriirqgxbhi";
    input += "coxavquhbkaomrroghdnfkknyigsluqebaqrtcwgmlnvmxoagisdmsokeznjsnwpx";
    input += "ygjjptvyjjkbmkxvlivinmpnpxgmmorkasebngirckqcawgevljplkkgextudqaodw";
    input += "qmfljljhrujoerycoojwwgtklypicgkyaboqjfivbeqdlonxeidgxsyzugkntoevwf";
    input += "uxovazcyayvwbcqswzhytlmtmrtwpikgacnpkbwgfmpavzyjoxughwhvlsxsgttbcyr";
    input += "lkaarngeoaldsdtjncivhcfsaohmdhgbwkuemcembmlwbwquxfaiukoqvzmgoeppiez";
    input += "tdacvwngbkcxknbytvztodbfnjhbtwpjlzuajnlzfmmujhcggpdcwdquutdiubgcvnxv";
    input += "gspmfumeqrofewynizvynavjzkbpkuxxvkjujectdyfwygnfsukvzflcuxxzvxzravzzn";
    input += "pxttduajhbsyiywpqunnarabcroljwcbdydagachbobkcvudkoddldaucwruobfylfhyvj";
    input += "uynjrosxczgjwudpxaqwnboxgxybnngxxhibesiaxkicinikzzmonftqkcudlzfzutplbycejmkpxcygsafzkgudy";
    expect(longestPalindrome(input)).toBe("fklkf");
  })
});