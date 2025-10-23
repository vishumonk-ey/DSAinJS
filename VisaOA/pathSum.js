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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
    const prefixSum = new Map();
    prefixSum.set(0, 1);
    let count = 0;
    const dfs = (node, value) => {
      if (!node) return;
      const currVal = value + node.val;
      const ancestorVal = currVal - targetSum;
      count += (prefixSum.get(ancestorVal) || 0);
      prefixSum.set(currVal, (prefixSum.get(currVal) || 0) + 1);
      dfs(node.left , currVal) 
      dfs(node.right , currVal)
      prefixSum.set(currVal , prefixSum.get(currVal) - 1)
    };
    dfs(root , 0)
    return count
  };
  