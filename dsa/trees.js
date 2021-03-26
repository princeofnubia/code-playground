class Trees {
    constructor(value) {
        this.value = value;
        this.children = []
    }

    insertChild(value) {
        let newTree = new Trees(value);
        this.children.push(newTree)
        return newTree
    }

    removeAChild(value) {
        let indexOfChild = this.children.indexOf(value)
        return this.children.splice(indexOfChild, 1)
    }
}