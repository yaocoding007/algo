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
  
  function getIntersectionNode(headA, headB) {
    if (!headA || !headB) return null;
  
    let pA = headA;
    while (pA) {
      let pB = headB;
  
      while (pB) {
        if (pA === pB) return pA;
        pB = pB.next;
      }
  
      pA = pA.next;
    }
  };
  
  const res = getIntersectionNode(listA, listB);
  
  console.log("lly-log -- res --->", res);
  