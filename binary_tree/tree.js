var soma = 0;

let tree = {
    left: {
        left: undefined,
        right: {
            value: 30,
        },
        value: 20,
    },
    right: undefined,
    value: 10,
}

function sum(tree){
    return tree.value 
    + (tree.left == undefined? 0 : sum(tree.left)) 
    + (tree.right == undefined? 0 : sum(tree.right)); 
}

function preOrder (tree) {
    // print v-l-r
    console.log(tree.value);
    tree.left && preOrder(tree.left);
    tree.right && preOrder(tree.right);
}

function inOrder (tree) {
    // print l-v-r
    tree.left && preOrder(tree.left);
    console.log(tree.value);
    tree.right && preOrder(tree.right);
}

function posOrder (tree) {
    // print l-v-r
    tree.left && preOrder(tree.left);
    tree.right && preOrder(tree.right);
    console.log(tree.value);
}

console.log('preOrder.......');
preOrder(tree);


console.log('inOrder.......');
inOrder(tree);


console.log('posOrder.......');
posOrder(tree);


console.log('soma .......:');
console.log(sum(tree));




// short-circuits
// (some falsy expression) && expr


