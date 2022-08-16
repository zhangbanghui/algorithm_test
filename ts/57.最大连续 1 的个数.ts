/**
 * 485. 最大连续 1 的个数
 * https://leetcode.cn/problems/max-consecutive-ones/
 */
function findMaxConsecutiveOnes(nums: number[]): number {
  let ans = 0;
  let temp = 0;
  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];
    if (item === 1) {
      temp += 1;
      if (temp > ans) {
        ans = temp;
      }
    } else {
      temp = 0;
    }
  }

  return ans;
}
