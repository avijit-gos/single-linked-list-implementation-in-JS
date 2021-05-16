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
    insert_at_top(data) {
        if(!this.head) {
            this.head = new Node(data)
        }
    }
}

const node_element = new List();
node_element.insert_at_top("A");

console.log(node_element)