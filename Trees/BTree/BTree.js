const Complex = require('../Complex');

class BTreeNode {
    constructor(isLeaf, order) {
        this.isLeaf = isLeaf;
        this.order = order;
        this.values = [];
        this.children = [];
    }

    toString() {
        return this.values.map(v => v.toString())
    }

    traverse(str="ROOT") {
        let i
        for (i = 0; i < this.values.length; i++) {
            if (!this.isLeaf) {
                this.children[i].traverse(str + " " + i);
            }
        }

        console.log(str + ": " + this.toString());

        if (!this.isLeaf) {
            this.children[i].traverse(str + " " + i);
        }

    }

    isFull() {
        return this.values.length == 2 * this.order - 1;
    }

    search(value) {
        let index = 0
        while (index < this.values.length && this.values[index].compare(value) < 0) {
            index++;
        }

        if (index < this.values.length && this.values[index].compare(value) == 0) {
            return [this, index];
        }

        if (this.isLeaf) {
            return null;
        }

        return this.children[index].search(value);
    }

    splitChild(index) {
        let child = this.children[index];
        let newChild = new BTreeNode(child.isLeaf, this.order);
        let midIndex = Math.floor(child.values.length / 2);
        let midValue = child.values[midIndex];
        newChild.values = child.values.slice(midIndex + 1);
        child.values = child.values.slice(0, midIndex);
        if (!child.isLeaf) {
            newChild.children = child.children.slice(midIndex + 1);
            child.children = child.children.slice(0, midIndex + 1);
        }
        this.children.splice(index + 1, 0, newChild);

        this.values.splice(index, 0, midValue);

    }

    insertNonFull(value) {
        let index = 0
        while (index < this.values.length && this.values[index].compare(value) < 0) {
            index++
        }

        if (this.isLeaf) {
            this.values.splice(index, 0, value)
            return
        }


        if (this.children[index].isFull()) {
            this.splitChild(index);
            if (this.values[index].compare(value) < 0) {
                index++;
            }
        }

        this.children[index].insertNonFull(value);
    }

}



class BTree {
    constructor(degree) {
        this.degree = degree;
        this.root = null;
    }

    traverse() {
        if (this.root) {
            this.root.traverse();
        }
    }

    search(value) {
        if (this.root.values.length == 0) {
            return null;
        }

        return this.root.search(value);
    }

    insert(value) {
        if (this.root == null) {
            this.root = new BTreeNode(true, this.degree);
            this.root.values.push(value);
            return;
        }

        if (this.root.isFull()) {
            let newRoot = new BTreeNode(false, this.degree);
            newRoot.children.push(this.root);
            newRoot.splitChild(0);
            newRoot.insertNonFull(value);
            this.root = newRoot;
            return
        }

        this.root.insertNonFull(value);
    }
}


module.exports = BTree;