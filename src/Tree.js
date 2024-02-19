import { Node } from './Node.js';

export class Tree {
    constructor(arr = []) {
        const processedArr = this.#removeDupesAndSortArray(arr);
        this.root = this.buildTree(processedArr);
    }

    #removeDupesAndSortArray = (arr) => {
        return [...new Set(arr)].sort((a, b) => a - b);
    }

    buildTree = (arr, start = 0, end = arr.length - 1) => {
        // Ref: https://www.youtube.com/watch?v=VCTP81Ij-EM
        if (start > end) return null;
        let mid = Math.floor((start + end) / 2);

        let rootNode = new Node(
            arr[mid],
            this.buildTree(arr, start, mid - 1),
            this.buildTree(arr, mid + 1, end)
        )

        return rootNode;
    }

    insert = (value, node = this.root) => {

        // For insertion into empty BST
        if (this.root === null) {
            this.root = new Node(value);
            return;
        }

        // Base case for recursion below
        if (node === null) {
            return new Node(value);
        }

        // Recursive calls
        if (value < node.key) {
            node.left = this.insert(value, node.left);
        }
        if (value > node.key) {
            node.right = this.insert(value, node.right);
        }

        // For insertion of repeated value, do nothing
        if (value == node.key) {
            return node;
        }

        return node;
    }

    delete = (value, node = this.root) => {
        // Ref: https://www.youtube.com/watch?v=wcIRPqTR3Kc

        // For deletion from empty BST
        if (this.root === null) {
            return;
        }

        // Base case for recursion
        if (node === null) {
            return node;
        }

        // Recursive calls
        if (value < node.key) {
            node.left = this.delete(value, node.left);
            return node;
        } else if (value > node.key) {
            node.right = this.delete(value, node.right);
            return node;
        }  
        
        // For deletion of leaf nodes and nodes with one child
        if (node.left === null) {
            return node.right;
        } else if (node.right === null) {
            return node.left;
        } else {
            // For deletion of internal (non-leaf) node with two children
            // Find the inorder successor
            let successorParent = node;
            let successor = node.right; 
            while (successor.left !== null) {
                successorParent = successor;
                successor = successor.left;
            }

            // Handle successor that is right child of node to delete (i.e. No left child)
            if (successorParent === node) {
                successorParent.right = successor.right;
            } else if (successorParent !== node) {
                // Handle successor that is further down the tree
                successorParent.left = successor.right
            } 

            node.key = successor.key;

            return node;
        }
    }

    find = (value, node = this.root) => {
        
        // Handle searching in empty BST
        if (this.root === null) {
            throw new Error("Unable to search empty BST.");
        }

        // Base case for recursion
        if (node === null) {
            return null; // Value not found
        } else if (value === node.key) {
            return node; // Value found
        } 
        
        // Recursive calls
        if (value < node.key) {
            return this.find(value, node.left);
        } else if (value > node.key) {
            return this.find(value, node.right);
        } 
    }
    
    levelOrder = (node = this.root, callback) => {
        let outputArr = [];
        let queue = [];

        // Handles empty BST
        if (this.root === null) {
            return outputArr;
        }

        queue.push(node);
        outputArr = this.#bfsTraversal(queue);

        if (callback) {
            return outputArr.map(callback)
        } else {
            return outputArr;
        }
    }

    #bfsTraversal = (queue, outputArr = []) => {
        while (queue.length !== 0) {
            let current = queue.shift();
            if (current.left) {
                queue.push(current.left);
            }
            if (current.right) {
                queue.push(current.right);
            }
            outputArr.push(current.key);
        }

        return outputArr;
    }
} 