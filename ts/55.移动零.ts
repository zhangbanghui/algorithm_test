/**
 * 283. 移动零
 * https://leetcode.cn/problems/move-zeroes/description/
 */

function moveZeroes(nums: number[]): void {
  let last = nums.length - 1;
  for (let i = 0; i < last; i++) {
    const cur = nums[i];
    if (cur === 0) {
      nums.splice(i, 1);
      nums.push(0);
      i -= 1;
      last -= 1;
    }
  }
}
