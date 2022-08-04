type IStackItem = {
  value: number;
  index: number;
};

function nextGreaterElements(nums: number[]): number[] {
  const stack: IStackItem[] = [];
  const ans = new Array(nums.length).fill(-1);

  // 需要循环一次，所以length * 2
  for (let i = 0; i < nums.length * 2; i++) {
    const currentValue = nums[i % nums.length];
    while (stack[stack.length - 1]?.value < currentValue) {
      const last = stack.pop();
      ans[last.index] = currentValue;
    }
    stack.push({
      value: currentValue,
      index: i % nums.length,
    });
  }

  return ans;
}
