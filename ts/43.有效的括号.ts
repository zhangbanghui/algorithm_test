function isValid(s: string): boolean {
  const strMap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const leftArrs = ["(", "{", "["];
  const rightArrs = [")", "}", "]"];

  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const item = s[i];
    if (leftArrs.includes(item)) {
      // 如果是左侧符号
      stack.push(item);
    } else {
      // 右侧符号
      const stackTop = stack.pop();
      if (strMap[stackTop] !== item) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
