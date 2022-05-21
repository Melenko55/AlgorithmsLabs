const BTree = require('./BTree/BTree.js');
const Complex = require('./Complex.js');
const {Interval, IntervalTree} = require('./IntervalTree/IntervalTree.js');
const fs = require('fs');
const readline = require('readline');

const bTree = new BTree(2);
const intervalTree = new IntervalTree();


function parseComplex(string) {
    //txt file format: real, img
    let arr = string.split(', ');
    return new Complex(parseFloat(arr[0]), parseFloat(arr[1]));
}
function parseComplexInterval(string) {
    //txt file format: real, img - real, img
    let arr = string.split(' - ');
    return new Interval(parseComplex(arr[0]), parseComplex(arr[1]));
}


function fillBTree(tree, file) {
    let data = fs.readFileSync(file, 'utf8');
    let arr = data.split('\n');
    arr.forEach(element => {
        let complex = parseComplex(element);
        tree.insert(complex);
    });
}

function fillIntervalTree(tree, file) {
    let data = fs.readFileSync(file, 'utf8');
    let arr = data.split('\r\n').filter(element => element.length > 0);
    console.log(arr);
    arr.forEach(element => {
        let interval = parseComplexInterval(element);
        console.log(interval);
        tree.insert({interval});
    });
}


// fillBTree(bTree, './ComplexBTree.txt');
// bTree.traverse();

// fillIntervalTree(intervalTree, './ComplexInterval.txt');
// intervalTree.printTree();