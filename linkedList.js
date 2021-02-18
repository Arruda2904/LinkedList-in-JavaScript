class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    //linked list method
    insertFirst(data) {
        this.head = new Node(data, this.head)
    }

    insertLast(data) {
        let tail;
        //if empty, make head
        if (!this.head) {
            this.head = new Node(data);
        } else {
            tail = this.head;

            while (tail.next) {
                tail = tail.next;
            }
            tail.next = new Node(data);
        }
    }

    insertAt(data, index) {
        if (index < 0 || !this.head) {
            return;
        }

        if (index === 0) {
            this.insertFirst(data);
        }

        let previous = this.getAt(index - 1);
        let newNode = new Node(data);
        newNode.next = previous.next;
        previous.next = newNode;
    }

    getAt(index) {
        let current = this.head;
        let count = 0;
        if (index <= 0) {
            return;
        }

        while (current) {
            if (count == index) {
                return current;
            }
            count++;
            current = current.next;
        }
    }

    removeAt(index) {
        if (index <= 0) {
            return;
        }

        let current = this.head;
        let previous;
        let count = 0;

        if (index == 0) {
            this.head = current.next;
        } else {
            while (count < index) {
                previous = current;
                current = current.next;
                count++;
            }
            previous.next = current.next;
        }
    }

    clearList() {
        this.head = null;
    }

    printListData() {
        let current = this.head;

        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}


const removeOdd = function (listHead) {
    let current = listHead;
    let newList = new LinkedList();
    if(!listHead){
        return;
    }
    // while(current){
    //     let rest = current.data % 2;
    //     console.log(rest);
    //     if(rest == 1){
    //         current.removeAt(count);
    //     }
    //     current = current.next;
    //     count++;
    // }
    while(current){
        let rest = current.data % 2;
        if(rest == 0){
            newList.insertLast(current.data);
        }
        current = current.next;
    }
    return newList;
}

let list2 = new LinkedList();
list2.insertFirst(1);
list2.insertFirst(2);
list2.insertFirst(3);
list2.insertLast(4);
list2.insertAt(5, 2);
//list2.removeAt(1);
list2.printListData();
console.log("----------------");
let listOnlyEven = new LinkedList();
listOnlyEven = removeOdd(list2.head);
listOnlyEven.printListData();
//300-200-100-400
