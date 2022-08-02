function findBottomLeftValue(root: TreeNode | null): number {
  if (root === null) return null;
  const queue = [root];

  // 记录当前行个数
  let curLength = 1;
  // 记录当前行最左值
  let curLeftValue = 0;
  // 是否刚开启遍历新的一行
  let flag = true;
  while (queue.length > 0) {
    const item = queue.shift();
    if (item.left) {
      queue.push(item.left);
    }
    if (item.right) {
      queue.push(item.right);
    }
    curLength -= 1;
    if (flag) {
      curLeftValue = item.val;
      flag = false;
    }
    if (curLength === 0 && queue.length > 0) {
      curLength = queue.length;
      flag = true;
    }
  }
  return curLeftValue;
}
