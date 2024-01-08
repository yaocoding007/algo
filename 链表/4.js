/** 83. 删除排序链表中的重复元素
 * link: https://leetcode.cn/problems/remove-duplicates-from-sorted-list/description/
 */

const {
    generateLinkedListMockData,
} = require('./index')

const link = generateLinkedListMockData([1,1,2,3,3])

function deleteDuplicates(link) {

    let p = link.next
    let dumpNode = new Node(link.value)

    while(p) {
        if(dumpNode.value === p.value) {
            dumpNode.next = p.next;
        }
        p = p.next
    }
    return link
}

const res = deleteDuplicates(link)


console.log('res ->', JSON.stringify(res))