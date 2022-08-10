/**
 * 409. 最长回文串
 *
 * 给定一个包含大写字母和小写字母的字符串 s ，返回 通过这些字母构造成的 最长的回文串 。
 * 在构造过程中，请注意 区分大小写 。比如 "Aa" 不能当做一个回文字符串。
 *
 * https://leetcode.cn/problems/longest-palindrome/description/
 */

function longestPalindrome(s: string): number {
  if (s.length === 0) return 0;
  const set = new Set();
  let ans = 0;
  for (let item of s) {
    if (set.has(item)) {
      set.delete(item);
      ans += 2;
    } else {
      set.add(item);
    }
  }
  const addition = set.size > 0 ? 1 : 0;
  return ans + addition;
}
