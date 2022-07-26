// function convertBST(root: TreeNode | null): TreeNode | null {
//   if (root === null) return null;

//   function inorderTraversal(root: TreeNode | null): number[] {
//     const ans = [];

//     function dfs(node: TreeNode | null) {
//       if (node === null) return;
//       dfs(node.left);
//       ans.push(node.val);
//       dfs(node.right);
//     }

//     dfs(root);

//     return ans;
//   }

//   const sortArr = inorderTraversal(root);

//   const queue = [root];
//   while (queue.length > 0) {
//     const item = queue.shift();
//     item.val = sortArr
//       .filter((num) => num >= item.val)
//       .reduce((prev, cur) => prev + cur, 0);
//     if (item.left) {
//       queue.push(item.left);
//     }
//     if (item.right) {
//       queue.push(item.right);
//     }
//   }
//   return root;
// }

function convertBST(root: TreeNode | null): TreeNode | null {
  if (root === null) return null;

  let sum = 0;

  function bfs(node: TreeNode | null) {
    if (node === null) return null;
    bfs(node.right);
    sum += node.val;
    node.val = sum;
    bfs(node.left);
  }

  bfs(root);

  return root;
}
