// system/engine/path_graph.js

export function buildGraph(transitions) {
  const adjacency = new Map();

  for (const t of transitions) {
    if (!t.target) continue;

    if (!adjacency.has(t.source)) {
      adjacency.set(t.source, new Set());
    }
    adjacency.get(t.source).add(t.target);
  }

  return { adjacency };
}
