function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  // 创建两个栈用来遍历储存链表
  const stack1 = [];
  const stack2 = [];

  while (l1 !== null) {
    stack1.push(l1);
    l1 = l1.next;
  }

  while (l2 !== null) {
    stack2.push(l2);
    l2 = l2.next;
  }

  // 创建一个用来存放最新数据的栈
  const totalStack = [];
  // 前一次是否大于10
  let flag = false;
  while (stack1.length !== 0 || stack2.length !== 0) {
    let item1: ListNode = null;
    let item2: ListNode = null;
    if (stack1.length > 0) {
      item1 = stack1.pop();
    }
    if (stack2.length > 0) {
      item2 = stack2.pop();
    }
    console.log("item1", item1?.val ?? 0);
    console.log("item2", item2?.val ?? 0);
    const item = new ListNode();
    const value = (item1?.val ?? 0) + (item2?.val ?? 0) + Number(flag);
    if (value >= 10) {
      item.val = value - 10;
      flag = true;
    } else {
      item.val = value;
      flag = false;
    }
    totalStack.push(item);
  }

  // 合并最新链表
  let newLinkedList: ListNode = new ListNode(-9999, null);
  const dummy = newLinkedList;
  if (flag) {
    newLinkedList.next = new ListNode(1);
    newLinkedList = newLinkedList.next;
  }
  while (totalStack.length > 0) {
    newLinkedList.next = totalStack.pop();
    newLinkedList = newLinkedList.next;
  }

  return dummy.next;
}
