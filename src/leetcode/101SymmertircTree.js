/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 * 
 * 
 * function isSymmetric(root){
   return helper(root.left, root.right)
}

function helper(left, right) {
    if (!left && !right) {
        return true;
    } else if (!left || !right) {
        return false;
    }
    
    return left.val === right.val && helper(left.left, right.right) && helper(left.right, right.left);
}
 */
var isSameTree = function (p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  else {
    return (
      p.val === q.val &&
      isSameTree(p.left, q.right) &&
      isSameTree(p.right, q.left)
    );
  }
};
var isSymmetric = function (root) {
  if (root.length === 1) return true;
  let [left, right] = [root.left, root.right];
  // console.log(left,right)
  return isSameTree(left, right);
};
