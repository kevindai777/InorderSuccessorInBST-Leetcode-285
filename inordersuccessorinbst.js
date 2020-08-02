//Objective is to find the successor to a node in a BST. The successor of a node is the node
//that has the smallest key that is still greater than the node.

let tree = new Tree()
tree.createRoot(11)
tree.addLeftNode(tree.root, 9)
tree.addRightNode(tree.root, 20)
tree.addRightNode(tree.root.right, 36)
tree.addLeftNode(tree.root.right, 15)

let p = tree.root


//O(n) solution that does the inorder traversal, then finds the right adjacent
//element in another iteration

let res = []
function dfs(node) {
    if (!node) {
        return
    }
    
    dfs(node.left)
    res.push(node)
    dfs(node.right)
}
dfs(tree.root)

for (let i = 0; i < res.length; i++) {
    if (res[i] == p) {
        return res[i + 1]
    }
}


//O(n) solution that uses the property of a BST to navigate and find the successor

let res = null
let curr = tree.root

while (curr) {
    //If our current value is too high, move it left
    if (curr.val > p.val) {
        res = curr
        curr = curr.left
    //If our current value is too low, move it right
    } else {
        curr = curr.right
    }
}

return res