// dfs
function mergeTrees(
  root1: TreeNode | null,
  root2: TreeNode | null
): TreeNode | null {
  if (root1 === null || root2 === null) {
    return root1 === null ? root2 : root1;
  }
  function bfs(lNode: TreeNode | null, rNode: TreeNode | null) {
    if (lNode === null || rNode === null) {
      return lNode === null ? rNode : lNode;
    }
    lNode.val += rNode.val;
    lNode.left = bfs(lNode.left, rNode.left);
    lNode.right = bfs(lNode.right, rNode.right);
    return lNode;
  }
  return bfs(root1, root2);
}

// bfs
// function mergeTrees(
//   root1: TreeNode | null,
//   root2: TreeNode | null
// ): TreeNode | null {
//   if (root1 === null || root2 === null) {
//     return root1 === null ? root2 : root1;
//   }
//   const queue = [root1, root2];
//   while (queue.length > 0) {
//     const lNode = queue.shift();
//     const rNode = queue.shift();
//     lNode.val += rNode.val;
//     if (lNode.left === null || rNode.left === null) {
//       if (lNode.left === null) {
//         lNode.left = rNode.left;
//       }
//     } else {
//       queue.push(lNode.left);
//       queue.push(rNode.left);
//     }

//     if (lNode.right === null || rNode.right === null) {
//       if (lNode.right === null) {
//         lNode.right = rNode.right;
//       }
//     } else {
//       queue.push(lNode.right);
//       queue.push(rNode.right);
//     }
//   }

//   return root1;
// }
