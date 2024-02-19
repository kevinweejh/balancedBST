import { Tree } from '../src/Tree.js';
import { Node } from '../src/Node.js';

describe('Tree class tests', () => {
    // buildTree()
    test('creates a balanced BST of height 3', () => {
        const tree = new Tree([1, 3, 2, 2]);
        
        expect(tree.root.key).toBe(2);
        expect(tree.root.left.key).toBe(1);
        expect(tree.root.right.key).toBe(3);
        
        expect(tree.root.left.left).toBeNull();
        expect(tree.root.left.right).toBeNull();
        expect(tree.root.right.left).toBeNull();
        expect(tree.root.right.right).toBeNull();

    });

    test('creates a balanced BST of height 4', () => {
        const tree = new Tree([1, 2, 3, 4, 5, 6]);

        expect(tree.root.key).toBe(3);
        expect(tree.root.left.key).toBe(1);
        expect(tree.root.right.key).toBe(5);

        expect(tree.root.left.left).toBeNull();
        expect(tree.root.left.right.key).toBe(2);
        expect(tree.root.right.left.key).toBe(4);
        expect(tree.root.right.right.key).toBe(6);

        expect(tree.root.left.right.left).toBeNull();
        expect(tree.root.left.right.right).toBeNull();
        expect(tree.root.right.left.left).toBeNull();
        expect(tree.root.right.left.right).toBeNull();
        expect(tree.root.right.right.left).toBeNull();
        expect(tree.root.right.right.right).toBeNull();
    })

    test('handles empty array', () => {
        const tree = new Tree([]);

        expect(tree.root).toBeNull();
    })

    test('creates a balanced BST from alphabets', () => {
        const tree = new Tree(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']);

        expect(tree.root.key).toBe('E');
        expect(tree.root.left.key).toBe('B');
        expect(tree.root.right.key).toBe('H');

        expect(tree.root.left.left.key).toBe('A');
        expect(tree.root.left.right.key).toBe('C');
        expect(tree.root.right.left.key).toBe('F');
        expect(tree.root.right.right.key).toBe('I');

        expect(tree.root.left.left.left).toBeNull();
        expect(tree.root.left.left.right).toBeNull();
        expect(tree.root.left.right.left).toBeNull();
        expect(tree.root.left.right.right.key).toBe('D');
        expect(tree.root.right.left.left).toBeNull();
        expect(tree.root.right.left.right.key).toBe('G');
        expect(tree.root.right.right.left).toBeNull();
        expect(tree.root.right.right.right.key).toBe('J');
    })

    // insert()
    test('handles insertion of 1 non-repeated number', () => {
        const tree = new Tree([1, 3, 2, 2]);
        tree.insert(4);

        expect(tree.root.right.right.key).toBe(4);
    })

    test('handles insertion of 2 non-repeated numbers', () => {
        const tree = new Tree([1, 3, 2, 2]);
        tree.insert(4);
        tree.insert(0);

        expect(tree.root.right.right.key).toBe(4);
        expect(tree.root.left.left.key).toBe(0);
    })

    test('handles insertion of repeated number', () => {
        const tree = new Tree([1, 3, 2, 2]);
        tree.insert(3);

        expect(tree.root.right.right).toBeNull();
    })

    test('handles insertion into empty BST', () => {
        const tree = new Tree();
        tree.insert(3);

        expect(tree.root).toEqual(new Node(3, null, null));
    })

    // delete()
    test('handles deletion of leaf node', () => {
        const tree = new Tree([1, 2, 3, 4]);
        tree.delete(4);
        tree.delete(1);

        expect(tree.root.right.right).toBeNull();
        expect(tree.root.left).toBeNull();
    })

    test('handles deletion of internal (non-leaf) node with single child', () => {
        const tree = new Tree([1, 2, 3, 4]);
        tree.delete(3);

        expect(tree.root.right.key).toBe(4);
    })

    test('handles deletion of internal (non-leaf) node with multiple children', () => {
        const tree = new Tree([1, 2, 3, 4, 5, 6]);
        tree.delete(5);

        expect(tree.root.right.key).toBe(6);
        expect(tree.root.right.left.key).toBe(4); 
        expect(tree.root.right.right).toBeNull();
    })

    test('handles deletion of BST root node', () => {
        const tree = new Tree([1, 2, 3, 4, 5, 6]);
        tree.delete(3);

        expect(tree.root.key).toBe(4)
        expect(tree.root.right.key).toBe(5);
        expect(tree.root.right.left).toBeNull();
        expect(tree.root.right.right.key).toBe(6);
    })

    test('handles deletion from an empty BST', () => {
        const tree = new Tree();
        tree.delete(1);

        expect(tree.root).toBeNull();
    })

    test('handles deletion of non-existent value', () => {
        const tree = new Tree([1, 2, 3, 4]);
        tree.delete(5);

        expect(tree.root.key).toBe(2);
        expect(tree.root.left.key).toBe(1);
        expect(tree.root.left.left).toBeNull();
        expect(tree.root.left.right).toBeNull();
        expect(tree.root.right.key).toBe(3);
        expect(tree.root.right.left).toBeNull();
        expect(tree.root.right.right.key).toBe(4);
        expect(tree.root.right.right.left).toBeNull();
        expect(tree.root.right.right.right).toBeNull();
    })

    // find()
    test('handles existing leaf node', () => {
        const tree = new Tree([1, 2, 3, 4]);
        const node = tree.find(1);

        expect(node).toEqual(new Node(1, null, null));
    })

    test('handles existing internal (non-leaf) node', () => {
        const tree = new Tree([1, 2, 3, 4]);
        const node = tree.find(3);

        expect(node).toEqual(new Node(3, null, new Node(4, null, null)));
    })

    test('handles non-existence node', () => {
        const tree = new Tree([1, 2, 3, 4]);
        const node = tree.find(5);

        expect(node).toBeNull();
    })

    test('handles empty BST', () => {
        const tree = new Tree();
        
        expect(() => {
            tree.find(1);
        }).toThrow(/^Unable to search empty BST.$/)
    })

    // levelOrder(callback)
    test('handles BST of height 3', () => {
        const tree = new Tree([1, 2, 3, 4]);
        const bfsArr = tree.levelOrder();

        expect(bfsArr).toEqual([2, 1, 3, 4]);
    })

    test('handles BST of height 4', () => {
        const tree = new Tree([1, 2, 3, 4, 5, 6]);
        const bfsArr = tree.levelOrder();

        expect(bfsArr).toEqual([3, 1, 5, 2, 4, 6]);
    })

    test('handles empty BST', () => {
        const tree = new Tree();
        const bfsArr = tree.levelOrder();

        expect(bfsArr).toEqual([]);
    })

    // preorder(callback)
    test('handles BST of height 3', () => {
        const tree = new Tree([1, 2, 3, 4]);
        const dfsArr = tree.preOrder();

        expect(dfsArr).toEqual([2, 1, 3, 4]);
    })

    test('handles BST of height 4', () => {
        const tree = new Tree([1, 2, 3, 4, 5, 6]);
        const dfsArr = tree.preOrder();

        expect(dfsArr).toEqual([3, 1, 2, 5, 4, 6]);
    })

    test('handles empty BST', () => {
        const tree = new Tree();
        const dfsArr = tree.preOrder();

        expect(dfsArr).toEqual([]);
    })

    // inorder(callback)
    test('handles BST of height 3', () => {
        const tree = new Tree([1, 2, 3, 4]);
        const dfsArr = tree.inOrder();

        expect(dfsArr).toEqual([1, 2, 3, 4]);
    })

    test('handles BST of height 4', () => {
        const tree = new Tree([1, 2, 3, 4, 5, 6]);
        const dfsArr = tree.inOrder();

        expect(dfsArr).toEqual([1, 2, 3, 4, 5, 6]);
    })

    test('handles empty BST', () => {
        const tree = new Tree();
        const dfsArr = tree.inOrder();

        expect(dfsArr).toEqual([]);
    })

    // postorder(callback)
    test('handles BST of height 3', () => {
        const tree = new Tree([1, 2, 3, 4]);
        const dfsArr = tree.postOrder();

        expect(dfsArr).toEqual([1, 4, 3, 2]);
    })

    test('handles BST of height 4', () => {
        const tree = new Tree([1, 2, 3, 4, 5, 6]);
        const dfsArr = tree.postOrder();

        expect(dfsArr).toEqual([2, 1, 4, 6, 5, 3]);
    })

    test('handles empty BST', () => {
        const tree = new Tree();
        const dfsArr = tree.postOrder();

        expect(dfsArr).toEqual([]);
    })

    // height(node)
    test('handles leaf node', () => {
        const tree = new Tree([1, 2, 3, 4, 5, 6]);
        const height = tree.height(2);

        expect(height).toBe(0);
    })

    test('handles internal (non-leaf) node', () => {
        const tree = new Tree([1, 2, 3, 4, 5, 6]);
        const height = tree.height(1);
        const heightRoot = tree.height(3);

        expect(height).toBe(1);
        expect(heightRoot).toBe(2);
    })

    test('handles empty BST', () => {
        const tree = new Tree();
        const height = tree.height(1);

        expect(height).toBe(0);
    })
})