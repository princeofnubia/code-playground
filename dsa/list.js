class LList {
    constructor(value) {
        this.head = { value, next: null }
        this.tail = this.head
    }

    insert(value) {
        const node = { value, next: null }
        this.tail.next = node
        this.tail = node
    }

    removeTail() {
        let currentNode = this.head
        while (currentNode.next !== this.tail) {
            currentNode = currentNode.next
        }
        currentNode.next = null
        this.tail = currentNode
    }

    findNode(item) {
        let currentNode = this.head;
        while (currentNode.value !== item) {
            currentNode = currentNode.next
        }

        return currentNode
    }

    findPrevious(item) {
            let currentNode = this.head
            while (!(currentNode.next === null) && (currentNode.next.value !== item)) {
                currentNode = currentNode.next
            }
            return currentNode
        }
        // {head: {value: 1, next: {value: 2, next: { value: 3, next: null}}}}
    remove(element) {
        let previous = this.findPrevious(element)
        if (!(previous.next == null)) {
            previous.next = previous.next.next
        }
    }
}