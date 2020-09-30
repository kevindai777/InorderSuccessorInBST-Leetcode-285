//Java Solution

class Solution {
    public TreeNode inorderSuccessor(TreeNode root, TreeNode p) {
        Stack<TreeNode> stack = new Stack<>();
        int prev = Integer.MIN_VALUE;
        TreeNode curr = root;
        
        while (curr != null || !stack.isEmpty()) {
            while (curr != null) {
                stack.push(curr);
                curr = curr.left;
            }
            
            curr = stack.pop();
            
            if (prev == p.val) {
                return curr;
            }
            prev = curr.val;
            
            curr = curr.right;
        }
        
        return null;
    }
}