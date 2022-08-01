function findMode(root: TreeNode | null): number[] {
  if (root === null) return [];
  // 所有节点数组
  const nodesArr = [];
  // 中序遍历
  function inorderTraversal(node: TreeNode | null) {
    if (node === null) return null;
    inorderTraversal(node.left);
    nodesArr.push(node.val);
    inorderTraversal(node.right);
  }

  inorderTraversal(root);

  let ans = [];
  let curValue = 0;
  let maxCount = 0;
  let curCount = 0;

  nodesArr.forEach((item) => {
    if (item === curValue) {
      curCount += 1;
    } else {
      curValue = item;
      curCount = 1;
    }

    if (curCount === maxCount) {
      ans.push(item);
    }
    if (curCount > maxCount) {
      maxCount = curCount;
      ans = [item];
    }
  });

  return ans;
}
