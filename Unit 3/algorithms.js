const arrayOut = document.querySelector(".arrayOut");

// leaf class
class Leaf {
    constructor (value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// leaves of the tree

var tree = new Leaf("33");
tree.left = new Leaf("30");
tree.right = new Leaf("35");

tree.left.left = new Leaf("27");
tree.left.right = new Leaf("31");

tree.right.right = new Leaf("36");

tree.left.left.left = new Leaf("26");
tree.left.left.right = new Leaf("28");

tree.left.left.left.left = new Leaf("20");

tree.right.right.left = new Leaf("34");
tree.right.right.right = new Leaf("37");

// 2 arrays 
var breadtharr = [];
var deptharr = [];

// Depth first search
function printPreorder(tree){
 
    if(tree){
 
        // First print the data of node
        console.log(tree.value," ")
 
        // Then recur on left child
        printPreorder(tree.left)
 
        // Finally recur on right child
        printPreorder(tree.right)
    }
}
console.log("Depth first search of tree is")
printPreorder(tree) 
arrayOut.innerHTML = printPreorder(tree);
// Put into deptharr[]

// Breadth first search
class ListAdd {
    constructor() {
        this.list = [];
    }
    // Method to add an element to the end of the queue
    addToList(item) {
        this.list.push(item);
    }
    // Method to remove and return the first element of the queue
    removeFromList() {
        return this.list.shift();
    }
    // Method to check if the queue is empty
    isEmpty() {
        return this.list.length === 0;
    }
}
// Function to perform level order traversal of a binary tree
function printLevelOrder(treeT) {
    // Create a deque to store nodes for traversal
    const newList = new ListAdd();
    // Add the root node to the queue
    newList.addToList(treeT);
    // Continue traversal until the queue is empty
    while (!newList.isEmpty()) {
        // Remove and get the first node from the queue
        const tempNode = newList.removeFromList();
        // Print the data of the current node
        console.log(tempNode.data + " ");

        // Enqueue the left child if it exists
        if (tempNode.left !== null) {
            newList.addToList(tempNode.left);
        }
        // Enqueue the right child if it exists
        if (tempNode.right !== null) {
            newList.addToList(tempNode.right);
        }
    }
}
// Create a binary tree and enter the nodes
const treeT = new Leaf("3");
treeT.left = new Leaf("0");
treeT.right = new Leaf("5");

treeT.left.left = new Leaf("7");
treeT.left.right = new Leaf("1");

treeT.right.right = new Leaf("6");

treeT.left.left.left = new Leaf("6");
treeT.left.left.right = new Leaf("8");

treeT.left.left.left.left = new Leaf("0");

treeT.right.right.left = new Leaf("4");
treeT.right.right.right = new Leaf("7");
console.log("Breadth first seach is ");
printLevelOrder(treeT);
// Put into beadtharr[]


// Display arrays on page
//const arrayOut = document.querySelector(".arrayOut");
arrayOut.innerHTML = printLevelorder(tree);