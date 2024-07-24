class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val: number, left: TreeNode | null = null, right: TreeNode | null = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}
function levelOrderTraversal(root: TreeNode| null) {
  if (!root) return [];
  const result: number[] = [];
  const queue: TreeNode[] = [root];
  while (queue.length) {
    const node = queue.shift()!;
    result.push(node.val);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return result;
}

function preorderTraversal(root: TreeNode | null) {
  const result: number[] = [];
  function dfs(node: TreeNode | null) {
    if (!node) return;
    result.push(node.val)
    dfs(node.left)
    dfs(node.right)
  }
  dfs(root)
  return result
}

function inorderTraversal(root: TreeNode | null) {
  const result: number[] = [];
  function dfs(node: TreeNode | null) {
    if (!node) return;
    dfs(node.left)
    result.push(node.val)
    dfs(node.right)
  }
  dfs(root)
  return result
}
function postorderTraversal(root: TreeNode | null) {
  const result: number[] = [];
  function dfs(node: TreeNode | null) {
    if (!node) return;
    dfs(node.left)
    dfs(node.right)
    result.push(node.val)
  }
  dfs(root)
  return result
}

export { TreeNode, levelOrderTraversal, preorderTraversal, inorderTraversal, postorderTraversal };