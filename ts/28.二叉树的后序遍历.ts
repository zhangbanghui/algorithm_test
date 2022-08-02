function postorderTraversal(root: TreeNode | null): number[] {
  const ans = [];

  function dfs(node: TreeNode | null) {
    if (node === null) return;
    dfs(node.left);
    dfs(node.right);
    ans.push(node.val);
  }

  dfs(root);

  return ans;
}
