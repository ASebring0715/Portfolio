var tree= null;
    
function printLevelOrder() {
    var h = height(tree);
    var i;
    for (i = 1; i <= h; i++)
        printCurrentLevel(tree, i);
}


function height(tree) {
    if (tree == null)
        return 0;
    else {
      
        var lheight = height(tree.left);
        var rheight = height(tree.right);

        if (lheight > rheight)
            return (lheight + 1);
        else
            return (rheight + 1);
    }
}

function printCurrentLevel(tree , level) {
    if (tree == null)
        return;
    if (level == 1)
        console.log(tree.value + " ");
    else if (level > 1) {
        printCurrentLevel(tree.left, level - 1);
        printCurrentLevel(tree.right, level - 1);
    }
}

   console.log("Breadth search tree is ");
   printLevelOrder();
   var tree = new Leaf("3");
tree.left = new Leaf("0");
tree.right = new Leaf("5");

tree.left.left = new Leaf("7");
tree.left.right = new Leaf("1");

tree.right.right = new Leaf("6");

tree.left.left.left = new Leaf("6");
tree.left.left.right = new Leaf("8");

tree.left.left.left.left = new Leaf("0");

tree.right.right.left = new Leaf("4");
tree.right.right.right = new Leaf("7");