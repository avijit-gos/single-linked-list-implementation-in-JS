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
    insert_data(data) {
        let new_node = new Node(data);
        if(!this.head) {
            this.head = new_node;
        } else {
            let current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = new_node;
            this.size++;
        }
    }
    insert_at_end(data) {
        let new_node = new Node(data);
        let current = this.head;
        if(!this.head) {
            this.insert_at_top(data);
        } else {
            while(current.next) {
                current = current.next;
            }
            current.next = new_node;
            this.size++;
        }
    }
}

const node_element = new List();
node_element.insert_at_top("A");
node_element.insert_data("B");
node_element.insert_data("C");
node_element.insert_data("D");
node_element.insert_data("E");
node_element.insert_at_end("F")
console.log(node_element)