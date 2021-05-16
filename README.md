# single-linked-list-implementation-in-JS

//************ Create a new Node class ************//
class Node {
    constructor(data, next=null) {
        this.data = data;
        this.next = next;
    }
}
//************ Create a new List class ************//
class List {
    constructor() {
        this.head = null;
        this.size = 0;
    }
//************ Insert into List implementation ************//

    //insert node at the top of the list...
    insert_at_top(data) {
        if(!this.head) {
            this.head = new Node(data)
        }
    }

    //insert nodes in the list...
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

    //insert node at the bottom of the list...
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

    //insert node at the specific position of the list...
    insert_at_index(data, index) {
        let new_node = new Node(data);

        if(index === 0) {
            let head = this.get_data(index);
            let after_head = this.get_data(index+1);
            head.next = new_node;
            new_node.next = after_head;
        } else {
            let current_node = this.get_data(index);
            let after_node = this.get_data(index+1);
            let before_node = this.get_data(index-1);
            current_node.next = new_node;
            new_node.next = after_node;
            this.size++;
        }
    }

    //Getting value according to the passing index number...
    get_data(index) {
        if(index === 0) {
            return this.head;
        } else {
            let current = this.head;
            let count = 0;
            while(current) {
                if(count === index) {
                    return current;
                } else {
                    current = current.next;
                    count++;
                }
            }
        }
    }
//************ Delete from the List implementation ************//

    //Delete top node from the list...
    delete_at_top() {
        let current = this.head;
        this.head = current.next;
        current = null;
        this.size--;
    }

    //Delete bottom node from the list...
    delete_at_end() {
        let current = this.head;
        let previous_node;
        while(current.next) {
            previous_node = current;
            current = current.next;
        }
        previous_node.next = null;
        this.size--;
    }

    //Delete specific position node... 
    delete_at_index(index) {
        if(index === 0) {
            this.delete_at_top()
        } else if(index === this.size-1) {
            this.delete_at_end()
        } else {
            let current_node = this.get_data(index);
            let after_node = this.get_data(index+1);
            let before_node = this.get_data(index-1);
            before_node.next = after_node;
            current_node = null;
            this.size--;
        }
    }
}

const node_element = new List();
node_element.insert_at_top("A");
node_element.insert_data("B");
node_element.insert_data("C");
node_element.insert_data("D");
node_element.insert_data("E");
node_element.insert_at_end("F");
node_element.insert_at_index("X", 0);
node_element.delete_at_top();
node_element.delete_at_end();
node_element.delete_at_index(1)
console.log(node_element)
