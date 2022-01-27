/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * // bfs 큐로 해결
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 * 
 *   @빠른답안 - 재귀
 * var isSameTree = function(p, q) {
    
    if( !p && !q) return true;
    if(!p || !q) return false;
    if(p.val !== q.val) return false;
    else {
       return  isSameTree(p.left,q.left) && isSameTree(p.right,q.right) 
    }
    
};
 * 
 * 
 */
var isSameTree = function (p, q) {
  console.log("===============");
  if (!p && !q) {
    return true;
  }

  if ((!p && q) || (p && !q) || p.val !== q.val) {
    return false;
  }

  let will = [];
  let will2 = [];
  will.push(p);
  will2.push(q);

  while (will.length || will2.length) {
    let [pf, qf] = [will.shift(), will2.shift()];
    // console.log(pf,qf)
    if (!pf || !qf) {
      if (!pf !== !qf) return false;
    } else {
      if (pf.val !== qf.val) return false;
      will.push(pf.left);
      will.push(pf.right);
      will2.push(qf.left);
      will2.push(qf.right);
      // console.log(will,will2)
    }
  }

  if (!will.length && !will.length) {
    return true;
  }
  return false;
};
