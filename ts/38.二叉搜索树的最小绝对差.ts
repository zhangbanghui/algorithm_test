function getMinimumDifference(root: TreeNode | null): number {
  if (root === null) return null;

  const allArr = [];
  const queue = [root];
  let min = Number.MAX_SAFE_INTEGER;

  while (queue.length > 0) {
    const item = queue.shift();
    allArr.forEach((num) => {
      const difference = Math.abs(num - item.val);
      if (difference < min) {
        min = difference;
      }
    });
    allArr.push(item.val);
    if (item.left) {
      queue.push(item.left);
    }
    if (item.right) {
      queue.push(item.right);
    }
  }

  return min;
}
