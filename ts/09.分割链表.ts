function splitListToParts(
  head: ListNode | null,
  k: number
): Array<ListNode | null> {
  // 链表长度
  let len = 0;
  const dummy = head;
  while (head !== null) {
    head = head.next;
    len += 1;
  }
  // 平均分割长度
  const blockLen = len / k;
  // 前几个需要向上取长度
  const mod = len % k;

  const totalArr: ListNode[] = [];

  let startHead = dummy;

  for (let i = 0; i < k; i++) {
    // 前几个向上取长度
    let splitLength = i < mod ? Math.ceil(blockLen) : Math.floor(blockLen);
    // 如果为0，则之间添加Null
    if (splitLength === 0) {
      totalArr.push(null);
    } else {
      totalArr.push(startHead);
      // 找到倒数第二个
      while (splitLength > 1) {
        startHead = startHead?.next;
        splitLength--;
      }
      // 添加倒数第一个，并将next指向null
      if (startHead) {
        const tmp = startHead.next;
        startHead.next = null;
        startHead = tmp;
      }
    }
  }

  return totalArr;
}
