/** 83. 删除排序链表中的重复元素
 * link: https://leetcode.cn/problems/remove-duplicates-from-sorted-list/description/
 */


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function generateLinkedListMockData(list) {
    if (list.length <= 0) {
        return null;
    }
    const head = new Node(list[0]);
    let current = head;
    for (let i = 1; i < list.length; i++) {
        const newNode = new Node(list[i]);
        current.next = newNode;
        current = newNode;
    }
    return head;
}

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