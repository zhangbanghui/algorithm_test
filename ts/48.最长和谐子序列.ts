function findLHS(nums: number[]): number {
  const sortArr = nums.sort((a, b) => a - b);

  let begin = 0;
  let ans = 0;

  // 滑动窗口算法
  for (let end = 0; end < sortArr.length; end++) {
    const current = sortArr[end];
    let head = sortArr[begin];
    if (current - head === 1) {
      ans = Math.max(ans, end - begin + 1);
    }
    while (current - head > 1) {
      begin += 1;
      head = sortArr[begin];
    }
  }
  return ans;
}
