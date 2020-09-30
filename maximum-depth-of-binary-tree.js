/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (root == null) return 0;
    // 递归 recursion
    const left = maxDepth(root.left);
    const right = maxDepth(root.right);
    return Math.max(left, right) + 1;
};

// test
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}
const root = new TreeNode(val = 0);
/* root.left = new TreeNode(val = 0);
root.right = new TreeNode(val = 0);
root.left.left = new TreeNode(val = 0);
root.left.right = new TreeNode(val = 0);
root.left.left.left = new TreeNode(val = 0);
 */
root.left = new TreeNode(val=0);
root.right = new TreeNode(val=0);
root.right.left = new TreeNode(val=0);
root.right.right = new TreeNode(val=0);

console.log(maxDepth(root));