function sortedListToBST(head: ListNode | null): TreeNode | null {
  if (head === null) return null;
  let num = 0;

  function dfs(left: ListNode | null, right: ListNode | null) {
    if (left?.val === right?.val) return null;
    const middle = getListMidlle(left, right);
    const root = new TreeNode(middle.val);
    root.left = dfs(left, middle);
    root.right = dfs(middle.next, right);
    return root;
  }

  return dfs(head, null);
}

// 快慢指针获取链表中点
function getListMidlle(left: ListNode | null, right: ListNode | null) {
  let fast = left;
  let slow = left;
  while (fast !== right && fast.next !== right) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
}
