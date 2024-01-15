/**
 * 24.两两交换链表中的节点
 * https://leetcode.cn/problems/swap-nodes-in-pairs/description/
 */

const {
    generateLinkedListMockData, getLinksValue
} = require('./index')

const link = generateLinkedListMockData([1,2,3,4])

// 1,2,3,4 -> 2,1,4,3

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(!head || !head.next) {
        return head
    }
    let one = head;
    let two = head.next;
    let three = two.next;
    two.next = one;
    one.next = swapPairs(three)
    return two;
};

const res = swapPairs(link)

console.log(getLinksValue(res))

/**
 * 思路一: 
 * 先按照奇偶将远来的链表分成两个，然后 偶+技 再合成一个
 */