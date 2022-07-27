function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (root === null) return null;
  let ans;

  function dfs(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null) {
    if (root === null) return null;
    // 左子树是否有值
    const lson = dfs(root.left, p, q);
    const rson = dfs(root.right, p, q);

    if (
      (lson && rson) ||
      ((root.val === q.val || root.val === p.val) && (lson || rson))
    ) {
      ans = root;
    }

    return lson || rson || root.val === q.val || root.val === p.val;
  }

  dfs(root, p, q);

  return ans;
}
