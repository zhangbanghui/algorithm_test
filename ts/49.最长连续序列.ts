function longestConsecutive(nums: number[]): number {
  if (nums.length === 0) return 0;
  const set = new Set(nums);

  let ans = 1;

  nums.forEach((num) => {
    if (!set.has(num - 1)) {
      let nextNum = num + 1;
      let tmpAns = 1;
      while (set.has(nextNum)) {
        tmpAns += 1;
        nextNum += 1;
        if (tmpAns > ans) {
          ans = tmpAns;
        }
      }
    }
  });

  return ans;
}
