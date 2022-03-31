'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';
    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}


class TreeNode {
    public left: TreeNode = null;
    public right: TreeNode = null;

    constructor(
        public value: number
    ) { }
}

class BinaryTree{
    public root: TreeNode = null;
    
    public insertTree(value: number): void {
        const node: TreeNode = new TreeNode(value);
        
        if(this.root === null){
            this.root = node;
        } else {
            let currentNode: TreeNode = this.root;
            
            while (currentNode) {
                if (value > currentNode.value) {
                    if (currentNode.right === null) {
                        currentNode.right = node;
                        return;
                    }

                    currentNode = currentNode.right;
                } else {
                    if (currentNode.left === null) {
                        currentNode.left = node;
                        return;
                    }

                    currentNode = currentNode.left;
                }
            }
        }
        
    }
    
}


function preOrder(tree: TreeNode){
    console.log(tree.value);
    tree.left && preOrder(tree.left);
    tree.right && preOrder(tree.right);
}

function getHeight(tree: TreeNode){
    
    let height = 0;
    let h_left = 0;
    let h_right = 0;
    
    if (tree){
        h_left  = tree.left ? getHeight(tree.left) + 1 : 0;
        h_right = tree.right ? getHeight(tree.right) + 1 : 0;
        height = h_left > h_right ? h_left: h_right;
    }
    
    return height;
    
}


function main() {
    const tree = new BinaryTree();
    
    var num = 0;
    for(let i = 1; i < inputLines.length; i++){
       num = Number(readLine()); 
       tree.insertTree(num); 
    }
    
    console.log(getHeight(tree.root));
}
