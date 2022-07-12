function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return null;
  }
  // dfs
  // [root.left, root.right] = [invertTree(root.right), invertTree(root.left)]
  // return root

  // bfs
  const queue = [root];
  while (queue.length > 0) {
    const node = queue.shift();
    const tmp = node.left;
    node.left = node.right;
    node.right = tmp;
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
  return root;
}
