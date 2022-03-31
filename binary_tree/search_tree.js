const tree = {}

function insert(tree, value){
    if(tree.value){
        if(value > tree.value) {
            insert(tree.right, value)
        } else {
            insert(tree.left, value)
        }
    } else {
        tree.value = value
        tree.right = {}
        tree.left = {}
    }
}

insert(tree, 10);
insert(tree, 11);
console.log(tree);


/*
function preOrder (tree) {
    // print v-l-r
    console.log(tree.value);
    soma = soma + tree.value;
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
console.log(soma);
*/




// short-circuits
// (some falsy expression) && expr


