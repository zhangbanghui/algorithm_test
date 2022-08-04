function twoSum(nums: number[], target: number): number[] {
  const arr = new Array(nums.length);

  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    const left = target - curr;
    if (arr.includes(curr)) {
      ans = [arr.findIndex((item) => item === curr), i];
    } else {
      arr[i] = left;
    }
  }

  return ans;
}
