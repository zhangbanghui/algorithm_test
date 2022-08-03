type Item = {
  temperature: number;
  index: number;
};

function dailyTemperatures(temperatures: number[]): number[] {
  // 单调栈
  const stack: Item[] = [];
  const ans = new Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    const temperature = temperatures[i];
    const item: Item = {
      temperature,
      index: i,
    };
    while (stack[stack.length - 1]?.temperature < temperature) {
      const last = stack.pop();
      const { temperature: lastTemp, index: lastIndex } = last;
      ans[lastIndex] = i - lastIndex;
    }
    stack.push(item);
  }

  return ans;
}
