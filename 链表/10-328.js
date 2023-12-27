/**
 * 链表元素按奇偶聚集
 * https://leetcode.cn/problems/odd-even-linked-list/description/
 */

const {
    generateLinkedListMockData
} = require('./index')

const link = generateLinkedListMockData([2,1,3,5,6,4,7])

// console.log(link)

// 输入: head = [2,1,3,5,6,4,7]
// 输出: [2,3,6,7,1,5,4]
// 你必须在 O(1) 的额外空间复杂度和 O(n) 的时间复杂度下解决这个问题。

// 按照索引来分类
// 奇数跟奇数连起来
// 偶数跟偶数连起来
// 最后奇数组再跟偶数组串起来

// 改变的是原链表
var oddEvenList = function(head) {
    let evenHead = odd.next;
    // 使用两个指针来记录
    let odd = head, even = evenHead;
    while(even && even.next) {
        // 奇数节点的下一位是 偶数节点的下一位
        odd.next = even.next;
        // 指针往后挪一位
        odd = odd.next;
        // 偶数节点的下一位是 奇数节点的下一位
        even.next = odd.next;
        // 指针往后挪一位
        even = even.next
    }
    odd.next = evenHead;
    return head
};

const res = oddEvenList(link)

console.log(res)
