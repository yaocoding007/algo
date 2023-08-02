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