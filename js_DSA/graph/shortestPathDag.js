const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

function shortestPath(n, edge, src){
    const adjList = new Map();
    for(let i=0 ; i<n; i++){
        adjList.set(i, []);
    }

    edge.forEach(([u, v, w])=>{
        adjList.get(u).push({v, w});
    })

    const distance = new Array(n).fill(Infinity);
    distance[src] = 0;
    const pq = new MinPriorityQueue({compare: (a, b) => a[1] -b[1]});
    pq.enqueue([src, 0]);

    while(!pq.isEmpty()){
        const {element : [node, dist]} = pq.dequeue();
        if(dist > distance[node]) continue;

        adjList.get(node).forEach(({v, w})=>{
            if(distance[node] + w < distance[v]){
                distance[v] = distance[node] + w;
                pq.enqueue([v, distance[v]])
            }        })

    }
    console.log(distance);
    return distance;
    
}