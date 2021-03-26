class Queue {
    constructor() {
        this.items = []
    }

    // methods
    // enqueue

    enqueue(element) {
            return this.items.push(element)
        }
        // deque

    deque(element) {
            return this.items.shift()
        }
        // front

    front() {
            return this.items[0]
        }
        // back

    back() {
            return this.items[this.items.length - 1]
        }
        // helpers
        // toString
    toString() {
            return this.items.toString()
        }
        // empty

    empty() {
        return this.items.length === 0 ? true : false
    }

    clear() {
        return this.items = []
    }
}