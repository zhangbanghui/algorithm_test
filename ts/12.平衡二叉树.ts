function isBalanced(root: TreeNode | null): boolean {
  if (!root) return true;
  return (
    Math.abs(getDepth(root.left) - getDepth(root.right)) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  );
}

function getDepth(root: TreeNode | null) {
  if (!root) return 0;
  return Math.max(getDepth(root.left), getDepth(root.right)) + 1;
}
