

function Linked_list(){
    this.head = null;
    this.current = null;
    this.tail = null;
    this.count = 0;
    this.add_list_item = function(data_payload, node){
        let new_node = {}; //create new object
        new_node.val = data_payload; // set new_node val to data_payload
        new_node.next = null; // set new object next to null

        if (this.head) { //if head exists
            if (node) { //if node is passed in, add new node after given node
                new_node.next = node.next;
                node.next = new_node;
            } else if (node === null) { //if node is null, add to beginning
                new_node.next = this.head;
                this.head = new_node;
            } else if (node === undefined){ //if node is undefined ...
                if (this.current.next === null){ //..and we at the end, add to end
                    this.tail.next = new_node;
                    this.tail = new_node;
                } else { //..and we in the middle somewhere, set it after current
                    let something = this.current.next;
                    this.current.next = new_node;
                    new_node = something;
                    return ++this.count;
                }
            } else if (node > this.count-1){
                console.error(node+' the element does not exist');
                return false;
            } else {
                this.rewind();
                for (let i = 0; i < node; i++){
                    this.get_next_value();
                }
            }
        } else { //else
            this.head = this.tail = this.current = new_node; // HEAD = new_node
        }
        this.current = new_node; //set current (1) to new node (3)
        return ++this.count; //increment count //returns count
    };
    this.get_current_value = function(){
        return this.current.val; //return the value of the current link list node
    };
    this.get_next_value = function(){
        if (this.current.next){
            this.current = this.current.next; //walk to the next item in the list
            return this.get_current_value(); //returns the value of the item walked to
        } else {
            return false; //if there are no other items, it returns false
        }
    };
    this.rewind = function(){
        if(this.head){
            this.current = this.head; //moves the list pointer back to the beginning of the list
            return true; //returns true if accomplished, or false if the list is empty
        }
        return false;
    };
}

var list = new Linked_list();
console.log(list.rewind()); //returns false
console.log(list.add_list_item(1)); //return 1
console.log(list.add_list_item(3)); //return 2
console.log(list.add_list_item(8)); //return 3
console.log(list); //returns 1, 3, 8
console.log(list.get_current_value()); //returns 8
console.log(list.rewind()); //returns true
console.log(list.get_current_value()); //returns 1
console.log(list.get_next_value()); //returns 3
console.log(list.get_current_value()); //returns 3
console.log(list.get_next_value()); //returns 8
console.log(list.get_next_value()); //returns false
console.log(list.current); // returns 8
console.log(list.add_list_item('start',null)); //return 4
console.log(list.add_list_item(9)); //return 5
// console.log(list.add_list_item('impossible',10)); //return false
console.log(list); // returns start, 1, 3, 8, 9
console.log(list.add_list_item(7,list.head.next.next)); //return 6. 1, 3, 7
console.log(list.rewind()); //returns true
console.log(list.get_next_value()); //returns 3
console.log(list.get_next_value()); //returns 7
console.log(list.add_list_item(4)); //return 7
console.log(list); // returns start, 1, 3, 7, 4, 8, 9

//original
// list.rewind(); //returns false
// list.add_list_item(1); //returns 1
// list.add_list_item(3); //returns 2
// list.add_list_item(8); //returns 3
// console.log(list);
// console.log(list.get_current_value()); //returns 8
// list.rewind(); //returns true
// list.get_current_value(); //returns 1
// list.get_next_value(); //returns 3
// list.get_current_value(); //returns 3
// list.get_next_value(); //returns 8
// list.get_next_value(); //returns false

