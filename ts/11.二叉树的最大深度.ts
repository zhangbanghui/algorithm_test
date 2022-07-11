function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;
  const arr: TreeNode[] = [root];
  let dep = 1;
  let depLength = 1;
  while (arr.length > 0) {
    const item = arr.shift();
    if (item.left) {
      arr.push(item.left);
    }
    if (item.right) {
      arr.push(item.right);
    }
    depLength -= 1;
    if (depLength === 0 && arr.length > 0) {
      dep += 1;
      depLength = arr.length;
    }
  }
  return dep;
}
