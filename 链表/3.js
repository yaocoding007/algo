/**
 * 21-合并两个有序链表
 * https://leetcode.cn/problems/merge-two-sorted-lists/description/
 */

const {
    generateLinkedListMockData,
} = require('./index')
  
//将两个升序链表合并为一个新的 升序 链表并返回。
// 新链表是通过拼接给定的两个链表的所有节点组成的。 

const link1 = generateLinkedListMockData([1, 2, 4])
const link2 = generateLinkedListMockData([1, 3, 4])

// => [1,1,2,3,4,4]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function mergeTwoLists0(list1, list2) {
    let p1 = list1;
    let p2 = list2;
    let p = dumpNode;

    while(p1 && p2) {
        if(p1.value > p2.value) {
            p.next = p2;
            p2 = p2.next;
        }else {
            p.next = p1;
            p1 = p1.next
        }

        p = p.next;
    }

    if(p1) {
        p.next = p1
    }
    if(p2) {
        p.next = p1
    }

    return dumpNode.next

};

function mergeTwoLists(link1, link2) {
    const dummyNode = new Node(-1);
    let currNode = dummyNode;
    let p1 = link1;
    let p2 = link2;

    while(p1 && p2) {
        if(p1.value > p2.value) {
            currNode.next = p2;
            p2 = p2.next;
        }else{
            currNode.next = p1
            p1 = p1.next
        }
        currNode = currNode.next
    }

    if(p1) {
        currNode.next = p1
    }

    if(p2) {
        currNode.next = p1
    }

    return dummyNode.next
}

const res = mergeTwoLists(link1, link2)

console.log('res ->', JSON.stringify(res))