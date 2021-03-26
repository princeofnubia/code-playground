class Graph {
    // implement a graph using adjacency list 
    constructor(noOfVertices) {
        this.noOfVertices = noOfVertices
        this.AdjList = new Map()
    }

    addVertex(v) {
        this.AdjList.set(v, [])
    }

    addEdge(v, w) {
        this.AdjList.get(v).push(w)
        this.AdjList.get(w).push(v)
    }

    removeEdge(v1, v2) {
        let indexOfV2 = this.AdjList.get(v1).indexOf(v2)
        let indexOfV1 = this.AdjList.get(v2).indexOf(v1)
        this.AdjList.get(v1).splice(indexOfV2, 1)
        this.AdjList.get(v2).splice(indexOfV1, 1)
    }
}