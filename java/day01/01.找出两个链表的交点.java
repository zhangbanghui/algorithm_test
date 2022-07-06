/**
 * leetcode: 160. 相交链表
 * desciption: 给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 null 。
 */
/**
 * Definition for singly-linked list.
 * public class ListNode {
 * int val;
 * ListNode next;
 * ListNode(int x) {
 * val = x;
 * next = null;
 * }
 * }
 */
public class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        Map<Integer, List<ListNode>> map = new HashMap();
        ListNode a = headA;
        while (a != null) {
            if (!map.containsKey(a.val)) {
                map.put(a.val, new ArrayList());
            }
            map.get(a.val).add(a);
            a = a.next;
        }
        a = headB;
        while (a != null) {
            if (map.containsKey(a.val)) {
                List<ListNode> list = map.get(a.val);
                for (ListNode l : list) {
                    // 如果根据地址判断则用这个
                    if (l == a) {
                        return a;
                    }
                    // 如果根据值判断则用这个
                    // ListNode x = l.next;
                    // ListNode y = a.next;
                    // while(x != null && y != null){
                    // if(x.val != y.val){
                    // break;
                    // }
                    // x = x.next;
                    // y = y.next;
                    // }
                    // if(x == null && y == null){
                    // return a;
                    // }
                }
            }
            a = a.next;
        }
        return null;
    }
}

/**
 * 知道是判断地址后使用这个更优
 */
public class Solution2 {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        Set<ListNode> set = new HashSet();
        ListNode a = headA;
        while (a != null) {
            set.add(a);
            a = a.next;
        }
        a = headB;
        while (a != null) {
            if (set.contains(a)) {
                return a;
            }
            a = a.next;
        }
        return null;
    }
}