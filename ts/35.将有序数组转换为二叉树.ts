function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (nums.length === 0) return null;

  function dfs(nums: number[], start: number, end: number) {
    if (start > end) return null;
    const index = Math.floor((start + end) / 2);
    const node = new TreeNode(nums[index]);
    node.left = dfs(nums, start, index - 1);
    node.right = dfs(nums, index + 1, end);
    return node;
  }

  const root = dfs(nums, 0, nums.length - 1);

  return root;
}
