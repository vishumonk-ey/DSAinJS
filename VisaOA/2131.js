/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function (words) {
  let isMiddle = 0;
  let pair = 0;
  const map = new Map();
  for (let i = 0; i < words.length; i++) {
    map.set(words[i], (map.get(words[i]) || 0) + 1);
  }
  for (let i = 0; i < words.length; i++) {
    if (map.get(words[i]) > 0) {
      const rev = ReverseString(str);
      if (rev == words[i] && map.get(rev) == 1) {
        isMiddle = 1;
      } else if (map.get(rev) != undefined) {
        pair++;
        map.set(rev, map.get(rev) - 1);
        map.set(words[i], map.get(words[i]) - 1);
      }
    }
  }
  const len = pair * 4 + isMiddle * 2;
  return len
};
