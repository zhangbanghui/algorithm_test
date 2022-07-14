function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (root === null && subRoot === null) return true;
  if (root === null || subRoot === null) return false;
  return (
    isSameTree(root, subRoot) ||
    isSubtree(root.left, subRoot) ||
    isSubtree(root.right, subRoot)
  );
}

function isSameTree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (root === null && subRoot === null) return true;
  if (root === null || subRoot === null) return false;
  if (root.val !== subRoot.val) {
    return false;
  }
  return (
    isSameTree(root.left, subRoot.left) && isSameTree(root.right, subRoot.right)
  );
}
