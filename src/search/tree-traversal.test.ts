import { TreeNode, levelOrderTraversal, preorderTraversal, inorderTraversal, postorderTraversal } from '../Tree/index'; // 假设我们的实现在这个文件中

describe('Binary Tree Traversal', () => {
  // 创建一个测试用的二叉树
  //       1
  //      / \
  //     2   3
  //    / \
  //   4   5
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);

  test('Level Order Traversal', () => {
    expect(levelOrderTraversal(root)).toEqual([1, 2, 3, 4, 5]);
  });

  test('Preorder Traversal', () => {
    expect(preorderTraversal(root)).toEqual([1, 2, 4, 5, 3]);
  });

  test('Inorder Traversal', () => {
    expect(inorderTraversal(root)).toEqual([4, 2, 5, 1, 3]);
  });

  test('Postorder Traversal', () => {
    expect(postorderTraversal(root)).toEqual([4, 5, 2, 3, 1]);
  });


  test('Single Node Tree', () => {
    const singleNode = new TreeNode(1);
    expect(levelOrderTraversal(singleNode)).toEqual([1]);
    expect(preorderTraversal(singleNode)).toEqual([1]);
    expect(inorderTraversal(singleNode)).toEqual([1]);
    expect(postorderTraversal(singleNode)).toEqual([1]);
  });
});