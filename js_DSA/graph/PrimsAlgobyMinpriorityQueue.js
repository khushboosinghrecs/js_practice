const {MinPriorityQueue} = require('@datastructure-js/priority-queue');

function PrimsAlgo(graph, start){
    const mst = [];
    const visited =new Set();
    const minHeap = new MinPriorityQueue({compare: (a, b)=> a.weight -b.weight});

    minHeap.enqueue({weight: 0, value:[start, null]});

    while(!minHeap.isEmpty()){
        const {weight: wt, value: [vertex, parent]} = minHeap.dequeue();
        visited.add(vertex);
       if(parent !==null){
        mst.push([parent, vertex, wt]);
       }

       graph.get(vertex).forEach(([weight, neighbour]) => {
            if(!visited.has(neighbour)){
                minHeap.enqueue({weight, value: [neighbour, vertex]});
            }
       });
    }

}