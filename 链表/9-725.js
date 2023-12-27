/**
 * 725. 分隔链表
 * https://leetcode.cn/problems/split-linked-list-in-parts/description/
 */

const {
    generateLinkedListMockData,
    getLinksValue
} = require('./index')

const link = generateLinkedListMockData([1,2,3,4,5])

// [1,2,3,4,5,6,7,8,9,10] k = 3
// => [[1,2,3,4],[5,6,7],[8,9,10]]

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(head, k) {
     // 计算链表长度
    const values = getLinksValue(head)
    const len = values.length;
    // 计算分组
    const group = Math.ceil(len / k)
    let reminder = len % k;
    let res = []
    for(let i = 0; i < group; i++) {
        if(reminder) {
            reminder --;
            let curr = values.splice(0, group + 1)
            res.push(curr)
        }else {
            let curr = values.splice(0, group)
            res.push(curr)
        }
    }
    console.log(res)

};

splitListToParts(link, 3)



