function preorderTraversal(root: TreeNode | null): number[] {
  const ans = [];

  function dfs(node: TreeNode | null) {
    if (node === null) return;
    ans.push(node.val);
    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);

  return ans;
}
