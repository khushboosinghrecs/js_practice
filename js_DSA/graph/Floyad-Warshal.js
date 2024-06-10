const INF = Number.MAX_SAFE_INTEGER;

function floydWarshall(graph) {
  const dist = [];
  const numVertices = graph.length;

  // Initialize the distance matrix with the graph values
  for (let i = 0; i < numVertices; i++) {
    dist[i] = [];
    for (let j = 0; j < numVertices; j++) {
      if (i === j) {
        dist[i][j] = 0;
      } else if (graph[i][j] !== 0) {
        dist[i][j] = graph[i][j];
      } else {
        dist[i][j] = INF;
      }
    }
  }

  // Floyd-Warshall algorithm
  for (let k = 0; k < numVertices; k++) {
    for (let i = 0; i < numVertices; i++) {
      for (let j = 0; j < numVertices; j++) {
        if (dist[i][k] !== INF && dist[k][j] !== INF) {
          dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
        }
      }
    }
  }

  // Check for negative weight cycles
  for (let i = 0; i < numVertices; i++) {
    if (dist[i][i] < 0) {
      console.log("Graph contains a negative weight cycle");
      return null;
    }
  }

  return dist;
}

// Example usage
const graph = [
  [0, 3, INF, 5],
  [2, 0, INF, 4],
  [INF, 1, 0, INF],
  [INF, INF, 2, 0]
];

const distances = floydWarshall(graph);

if (distances) {
  console.log("Shortest distances between every pair of vertices:");
  for (let i = 0; i < distances.length; i++) {
    console.log(distances[i].join(' '));
  }
}
