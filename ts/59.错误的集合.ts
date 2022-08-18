/**
 * 645. 错误的集合
 * https://leetcode.cn/problems/set-mismatch/description/
 */
function findErrorNums(nums: number[]): number[] {
  if (nums.length === 0) return [];
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    set.add(i + 1);
  }
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    if (set.has(curr)) {
      set.delete(curr);
    } else {
      ans = curr;
    }
  }
  return [ans, set.values().next().value];
}
