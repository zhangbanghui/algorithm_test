function inorderTraversal(root: TreeNode | null): number[] {
  const ans = [];

  function dfs(node: TreeNode | null) {
    if (node === null) return;
    dfs(node.left);
    ans.push(node.val);
    dfs(node.right);
  }

  dfs(root);

  return ans;
}
