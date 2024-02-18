import { Node } from './Node';

export class Tree {
    constructor(arr = []) {
        this.root = this.#removeDupesAndSortArray(arr);
    }

    #removeDupesAndSortArray = (arr) => {
        return [...new Set(arr)].sort((a, b) => a - b);
    }
} 