function isSymmetric(root: TreeNode | null): boolean {
  if (root === null) {
    return false;
  }
  return isSameNode(root.left, root.right);
}

function isSameNode(lNode: TreeNode | null, rNode: TreeNode | null): boolean {
  if (lNode === null && rNode === null) return true;
  if (lNode === null || rNode === null) return false;
  if (lNode.val !== rNode.val) return false;
  return (
    isSameNode(lNode.left, rNode.right) && isSameNode(lNode.right, rNode.left)
  );
}
