/**
 * 9. 回文数
 * https://leetcode.cn/problems/palindrome-number/
 */

function isPalindrome(x: number): boolean {
  if (x < 0) return false;
  let cur = x;
  let ans = 0;
  while (cur !== 0) {
    ans = ans * 10 + (cur % 10);
    cur = Math.floor(cur / 10);
  }
  return ans === x;
}
