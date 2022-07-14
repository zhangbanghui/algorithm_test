// 该方法计算一个节点从根到叶子节点满足情况的次数
function rootSum(root: TreeNode | null, targetSum: number): number {
  if (root === null) return 0;

  let ret = 0;

  if (root.val === targetSum) {
    ret += 1;
  }

  ret += rootSum(root.left, targetSum - root.val);
  ret += rootSum(root.right, targetSum - root.val);

  return ret;
}

function pathSum(root: TreeNode | null, targetSum: number) {
  if (root === null) return 0;

  let ret = rootSum(root, targetSum);
  ret += pathSum(root.left, targetSum);
  ret += pathSum(root.right, targetSum);

  return ret;
}
