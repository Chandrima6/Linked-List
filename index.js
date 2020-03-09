
// Use cases: Online Games
// Memory management benefit: Data doesn't have to be stored together

// Linked List constructor 
function LinkedList() {
  this.head = null;
  this.tail = null;
}


// Node constructor function
function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

// O(1) Constant Runtime complexity
LinkedList.prototype.addToHead = function(value) {
    var node = new Node(value, this.head, null);
    if (this.head) {
      this.head.prev = node;
    } else {
      this.tail = node;
    }
    this.head = node;
}

// O(1) Constant Runtime complexity
LinkedList.prototype.addToTail = function(value) {
    var node = new Node(value, null, this.tail);
    if (this.head) {
      this.tail.next = node;
    } else {
      this.head = node;
    }
    this.tail = node;
}

// O(1) Constant Runtime complexity
LinkedList.prototype.removeHead = function() {
    var val = this.head ? this.head.value : null;
    if (this.head == this.tail) {
      this.head = this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    return val;
}

// O(1) Constant Runtime complexity
LinkedList.prototype.removeTail = function() {
    var val = this.tail ? this.tail.value : null;
    if (this.head == this.tail) {
      this.head = this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    return val;
}

// O(n) Linear Runtime Complexity
LinkedList.prototype.search = function(value) {
    var currentNode = this.head;
    while (currentNode && currentNode.value !== value) {
      currentNode = currentNode.next ? currentNode.next : null;
    }
    return currentNode;
}

// O(n) Linear Runtime complexity
LinkedList.prototype.indexOf = function(value) {
    var nodeIndex = [];
    var counter = 0;
    var currentNode = this.head; 
    while (currentNode) {
        if (currentNode.value === value) {
          nodeIndex.push(counter);
        }
        currentNode = currentNode.next;
        counter ++;
    }
    return nodeIndex;
}

var userList = new LinkedList();

userList.addToHead("Deep");
userList.addToHead("Anup");
userList.addToTail("chandrima");
userList.addToHead("chandrima");

// console.log('Linked List', userList);

var itemPos = userList.indexOf("chandrima");
console.log('Searched Indices', itemPos);

// var searchedItem = userList.search("Anup");
// console.log('Searched Item', searchedItem);
// console.log('==============')
// var item = userList.removeHead();
// console.log('Removed Item', item);
// console.log('Linked List', userList);

// userList.removeTail();

// console.log('Linked List', userList);

// var item = userList.removeTail();
// console.log('Removed Item', item);
// console.log('Linked List', userList);
// var item = userList.removeTail();
// console.log('Removed Item', item);
// console.log('Linked List', userList);

// var searchedItem = userList.search("Anup");
// console.log('Searched Item', searchedItem);
