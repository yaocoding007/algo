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

//   [4,1,8,4,5]
//     [5,6,1,8,4,5]
const mockLinkedList = generateLinkedListMockData([5, 6, 1, 8, 4, 5]);
// console.log(JSON.stringify(mockLinkedList));

const common = { value: 8, next: { value: 4, next: { value: 5, next: null } } };

const listA = { value: 4, next: { value: 1, next: common } };
const listB = {
  value: 5,
  next: { value: 6, next: { value: 1, next: common } },
};

// 暴力解法
function getIntersectionNode1(headA, headB) {
  if(!headA || !headB) {
    return null
  }
  let pA = headA;
  while(pA) {
    let pB = headB;

    while(pB) {
      if(pA === pB) {
        return pA
      }
      pB = pB.next;
    }
    pA = pA.next;
  }
  return null
}
/**
 *  哈希表
 * @param {*} headA 
 * @param {*} headB 
 * @returns 
 */
function getIntersectionNode2(headA, headB) {
  if(!headA || !headB) {
    return null
  }
  let hashMap = new Map();
  let pA = headA
  while(pA) {
    hashMap.set(pA, 1)
    pA = pA.next
  }
  let pB = headB;
  while(pB) {
    if(hashMap.has(pB)) {
      return pB
    }
    pB = pB.next
  }
  return null
}

/**
 * 双指针
 * @param {*} headA 
 * @param {*} headB 
 * @returns 
 */
function getIntersectionNode(headA, headB) {
  if(!headA || !headB) {
    return null
  }

  let p1 = headA, p2 = headB;

  while(p1 !== p2) {
    p1 = p1 === null ? headB : p1.next
    p2 = p2 === null ? headA : p2.next
  }

  return p1
}


const res = getIntersectionNode(listA, listB);

console.log("lly-log -- res --->", res);
