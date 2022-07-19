function longestUnivaluePath(root: TreeNode | null): number {
  let sum = 0;

  function dfs(node: TreeNode | null) {
    if (node === null) {
      return 0;
    }
    const left = dfs(node.left);
    const right = dfs(node.right);
    let leftPath = 0,
      rightPath = 0;
    if (node?.left?.val === node.val) {
      leftPath = left + 1;
    }
    if (node?.right?.val === node.val) {
      rightPath = right + 1;
    }
    sum = Math.max(sum, leftPath + rightPath);

    return Math.max(rightPath, leftPath);
  }

  dfs(root);

  return sum;
}
