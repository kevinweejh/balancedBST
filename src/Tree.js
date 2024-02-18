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
} 