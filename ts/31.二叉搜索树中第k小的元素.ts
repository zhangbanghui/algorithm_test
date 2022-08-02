function kthSmallest(root: TreeNode | null, k: number): number {
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

  const res = inorderTraversal(root);

  return res[k - 1];
}
