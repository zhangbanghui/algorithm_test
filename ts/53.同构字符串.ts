/**
 * 205. 同构字符串
 * https://leetcode.cn/problems/isomorphic-strings/
 */

function isIsomorphic(s: string, t: string): boolean {
  const sMap = {};
  const tMap = {};
  for (let i = 0; i < s.length; i++) {
    const x = s[i];
    const y = t[i];
    if ((sMap[x] && sMap[x] !== y) || (tMap[y] && tMap[y] !== x)) {
      return false;
    }
    sMap[x] = y;
    tMap[y] = x;
  }
  return true;
}
