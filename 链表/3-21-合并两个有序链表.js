

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
var mergeTwoLists1 = function(list1, list2) {
    let dumpNode = new Node(-1)
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

/**
 * 递归法
 * @param {*} link1 
 * @param {*} link2 
 * @returns 
 */
function mergeTwoLists(link1, link2) {
    if(!link1) {
        return link2
    }
    if(!link2) {
        return link1
    }
    if(link1.value < link2.value) {
        link1.next = mergeTwoLists(link1.next, link2)
        return link1
    }else{
        link2.next = mergeTwoLists(link1, link2.next)
        return link2
    }
}

const res = mergeTwoLists(link1, link2)



console.log('res ->', JSON.stringify(res))