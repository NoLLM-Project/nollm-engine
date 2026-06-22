// system/engine/path_search.js

export function findPath(graph, start, end) {
  const visited = new Set();
  const queue = [[start]];

  while (queue.length > 0) {
    const path = queue.shift();
    const node = path[path.length - 1];

    if (node === end) return path;

    if (visited.has(node)) continue;
    visited.add(node);

    const neighbors = graph.adjacency.get(node) || [];
    for (const n of neighbors) {
      queue.push([...path, n]);
    }
  }

  return null;
}
