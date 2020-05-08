

class Node{

    constructor(element){
        this.element = element;
        this.next = null;
    }
}

class LinkedList{

    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

 

    addFirst(element){
        let node = new Node(element);
        if(this.isEmpty()){
            this.head = node;
            this.tail = this.head;
        } else {
            
            node.next = this.head;
            this.head = node;
         }
         this.size++;
    }
    addLast(element){
        let node = new Node(element);
        if(this.isEmpty()){
            this.tail = node;
            this.head = this.tail;
        } else {
            this.tail.next = node;
            this.tail = node;
            
         }
         this.size++;
    }

    deleteHead(){
        if (this.isEmpty()){
            throw "List is empty";
        } 
        
        if (this.head === this.tail){
            this.head = this.tail = null;
        }else {
            let temp = this.head.next;
            this.head.next = null;
            this.head = temp;
            
            // alterantive code
            // this.head = this.head.next;


        } 
    }

    getPrevious(node){
        let current = this.head;
        while(current !== null){
            if(current.next == node){
            return current;
            } else {
                current = current.next;
            }
        }
        return null;
    }

    deleteTail(){
        if(this.isEmpty()){
            throw "List is Empty";
        }

        //if list has one item
        if (this.head === this.tail){
            this.head = this.tail = null;
        }
        //if list has multiple items
        let previous = this.getPrevious(this.tail);
        previous.next = null;
        this.last = previous;
    }

    contains(element){
        return this.indexOf(element) !== -1;
    }

    print(){
        let current = this.head;
        while(current !== null){
            console.log(current.element);
            current = current.next;
        }
    }
    indexOf(element){
        let index = 0;
        var current = this.head;
        while(current != null){
            if(current.element === element){
                return index;
            } else {
                current = current.next;
                index++;
            }
        }
        return -1;
    }

    isEmpty(){
        return this.head === null;
    }

}

let mylist = new LinkedList();
mylist.addLast("10");
mylist.addLast("120");
mylist.addLast("130");
console.log(mylist.indexOf("120"));
console.log(mylist.indexOf("10"));
console.log(mylist.indexOf("130"));

mylist.print();

console.log(mylist.contains("10"));
console.log(mylist.contains("1320"));

mylist.deleteTail();

mylist.print();

