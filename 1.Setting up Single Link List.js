class Node {
    constructor(data, next=null) {
        this.data = data;
        this.next = next;
    }
}

class List {
    constructor() {
        this.head = null;
        this.size = 0;
    }
}

const node_element = new List();
console.log(node_element)