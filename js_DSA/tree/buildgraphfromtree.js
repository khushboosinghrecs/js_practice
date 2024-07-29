function distanceK(root, target, k){
    let graph = new Map();
    function buildGraph(node, parent){
        if(!root) return;
        if(parent){
            if(!graph.has(node.val)){
                graph.set(node.val, []);
            }
            graph.get(node.val).push(parent.val);
            if(!graph.has(parent.val)){
                graph.set(parent.val, []);
            }
            graph.get(parent.val).push(node.val);
        }

        if(node.left) buildGraph(node.left, node);
        if(node.right) buildGraph(node.right, node);
    }

    buildGraph(root, null);

    const result =[];
    const queue = [[target.val, 0]];
    const visited = new Set();
    visited.add(target.val);

    while(queue.length > 0){
        const [node, distance] = queue.shift;

        if(distance === k){
            result.push(node);
        } else if( distance < k){
            const neighbours = graph.get(node) || [];

            neighbours.forEach(node => {
                if(!visited.has(node)){
                    visited.add(node);
                    queue.push([node, distance + 1]);

                }
                
            });
        }
    }
}