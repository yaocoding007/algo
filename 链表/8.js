
/**
 * 234. 回文链表
 * https://leetcode.cn/problems/palindrome-linked-list/description/
 * 给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。
 * 如果是，返回 true ；否则，返回 false 。
 */

const {
    generateLinkedListMockData,
} = require('./index')

const link = generateLinkedListMockData([1,2,2,1])

// 输入：head = [1,2,2,1] => true

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome1 = function(head) {
    const values = [];
    const reverseValues = []

    while (head) {
        reverseValues.unshift(head.value)
        values.push(head.value)
        head = head.next
    }
    return values.join('') === reverseValues.join('')
};

var isPalindrome = function(head) {
    let values = [];

    while(head !== null) {
        values.push(head.value)
        head = head.next
    }

    for(let i = 0, j = values.length - 1;
        i < j;
        i++, j--
    ) {
        console.log(i, j)
        if(values[i] !== values[j]) {
            return false
        }
    }
    return true;
};



const res = isPalindrome(link)

console.log('lly-log -- res --->', res);