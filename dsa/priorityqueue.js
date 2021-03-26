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
            let priority = this.items[0].code;
            for (let index = 0; index < this.items.length; index++) {
                if (priority < this.items[index].code) {
                    priority = index
                }
            }
            return this.items.splice(priority, 1)
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