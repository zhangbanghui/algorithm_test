function sumOfLeftLeaves(root: TreeNode | null): number {
  if (root === null) return 0;
  if (isLeaf(root.left)) {
    return root.left.val + sumOfLeftLeaves(root.right);
  }
  return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
}

function isLeaf(node: TreeNode | null) {
  return node?.left === null && node?.right === null;
}
