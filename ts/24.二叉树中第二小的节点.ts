function findSecondMinimumValue(root: TreeNode | null): number {
  if (root === null) return 0;
  let ans = -1;
  const rootValue = root.val;

  function dfs(node: TreeNode | null) {
    if (node === null) return 0;

    if (ans !== -1 && node.val >= ans) {
      return;
    }

    if (node.val > rootValue) {
      ans = node.val;
    }

    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);

  return ans;
}
