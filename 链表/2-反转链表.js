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

const link = generateLinkedListMockData([1, 2, 3, 4, 5])

// https://leetcode.cn/problems/reverse-linked-list/description/

function reverseList2() {
    if(!head) {
        return null
    }
    let [prev, curr] = [null, head]
    while(curr) {
        [curr.next, prev, curr] = [prev, curr, curr.next]
    }
    return prev
}

function reverseList1(head) {
    if(!head) {
        return null
    }
    let [prev, curr] = [null, head]
    while(curr) {
        // 保存当前节点的下一个节点
        let temp = curr.next;
        // 将当前节点指针反转
        curr.next = prev;
        // 当前节点设置为前置节点
        prev = curr;
        // 下一个节点设置成 当前节点进入下次循环
        curr = temp
    }
    return prev;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseList0(head) {
    if(!head) {
        return null
    }
    let p = head
    const list = [];
    while(p) {
        list.push(p)
        p = p.next
    }
    /***
     * 
     */
    for(let i = list.length - 1; i > -1; i--) {
        list[i].next = list[i - 1]
        if(i === 0) {
            list[i].next = null
        }   
    }
    return list[list.length - 1]
};

const res = reverseList(link)

console.log('lly-log -- res --->', res);

