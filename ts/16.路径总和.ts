function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (root === null) {
    return false;
  }
  const queue = [root];
  const leafArr = [];
  while (queue.length > 0) {
    const item: any = queue.shift();
    const parentValue = item.parentValue ?? 0;
    if (item.left || item.right) {
      if (item.left) {
        item.left.parentValue = item.val + parentValue;
        queue.push(item.left);
      }
      if (item.right) {
        item.right.parentValue = item.val + parentValue;
        queue.push(item.right);
      }
    } else {
      leafArr.push(parentValue + item.val);
    }
  }
  return leafArr.includes(targetSum);
}
