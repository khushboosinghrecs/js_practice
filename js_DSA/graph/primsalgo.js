// class Graph{
//     constructor(vertices){
//         this.vertices = vertices;
//         this.adjacencyList = new Map();

//         for(let i=0; i< vertices.length; i++){
//             this.adjacencyList.set(vertices[i], [])
//         }
//     }

//     addEdge(v1, v2, weight){
//         this.adjacencyList.get(v1).set({v2, weight});
//         this.adjacencyList.get(v2).set({v1, weight});
//     }
// }

class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    insert(key, value) {
      this.heap.push({ key, value });
      this.bubbleUp();
    }
  
    extractMin() {
      if (this.heap.length < 2) return this.heap.pop();
      const min = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.bubbleDown();
      return min;
    }
  
    bubbleUp() {
      let index = this.heap.length - 1;
      while (index > 0) {
        let parentIndex = Math.floor((index - 1) / 2);
        if (this.heap[parentIndex].key <= this.heap[index].key) break;
        [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
        index = parentIndex;
      }
    }
  
    bubbleDown() {
      let index = 0;
      const length = this.heap.length;
      const element = this.heap[0];
      while (true) {
        let leftChildIndex = 2 * index + 1;
        let rightChildIndex = 2 * index + 2;
        let leftChild, rightChild;
        let swap = null;
  
        if (leftChildIndex < length) {
          leftChild = this.heap[leftChildIndex];
          if (leftChild.key < element.key) {
            swap = leftChildIndex;
          }
        }
  
        if (rightChildIndex < length) {
          rightChild = this.heap[rightChildIndex];
          if (
            (swap === null && rightChild.key < element.key) ||
            (swap !== null && rightChild.key < leftChild.key)
          ) {
            swap = rightChildIndex;
          }
        }
  
        if (swap === null) break;
        [this.heap[index], this.heap[swap]] = [this.heap[swap], this.heap[index]];
        index = swap;
      }
    }
  
    isEmpty() {
      return this.heap.length === 0;
    }
  }
  

function prim (graph, start){
    const mst = [];
    const visited = new Set();
    const minHeap = new minHeap();

    minHeap.insert(0, {vertex: start, parent: null});

    while(!minHeap.isEmpty()){
        const {key: weight, value: {vertex, parent}} = minHeap.extractMin();
        if(visited.has(vertex)) continue;

        visited.add(vertex);
        if(parent!== null){
            mst.push({vertex1: parent, vertex2: vertex, weight});
        }

        graph[vertex].forEach(({neighbour, weight}) => {
            if(!visited.has(neighbour)){
                minHeap.insert(weight, {vertex: neighbour,parent: vertex})
            }
            
        });
    }

    return mst;
}
