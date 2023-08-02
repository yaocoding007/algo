

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
var mergeTwoLists = function(list1, list2) {
    let p1 = list1;
    let p2 = list2;
    let arr = []
    while(p1.next || p2.next) {
        if(p1.value > p2.value) {
            arr.push(p2.value)
            p2 = p2.next
        }else {
            arr.push(p1.value)
            p1 = p1.next
        }
    }

    return arr

};

const res = mergeTwoLists(link1, link2)


console.log('res ->', res)