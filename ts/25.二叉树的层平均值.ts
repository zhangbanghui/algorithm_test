function averageOfLevels(root: TreeNode | null): number[] {
  if (root === null) return null;
  const queue = [root];
  const ans = [];
  // 当前层数量
  let totalNum = 1;
  // 当前层剩余数量
  let leftNum = 1;
  // 当前层总数
  let totalValue = 0;
  while (queue.length > 0) {
    const item = queue.shift();
    if (item.left) {
      queue.push(item.left);
    }
    if (item.right) {
      queue.push(item.right);
    }
    leftNum -= 1;
    totalValue += item.val;
    if (leftNum === 0) {
      ans.push(totalValue / totalNum);
      totalNum = queue.length;
      leftNum = queue.length;
      totalValue = 0;
    }
  }
  return ans;
}
