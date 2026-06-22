// 3_Registry/Routing/routing_inspector.js

export function inspectRoutingGraph(transitions) {
  const bySource = {};

  for (const t of transitions) {
    if (!bySource[t.source]) bySource[t.source] = [];
    bySource[t.source].push(t);
  }

  console.log("=== Routing Graph ===");
  for (const source of Object.keys(bySource)) {
    console.log(`\nSource: ${source}`);
    for (const t of bySource[source]) {
      console.log(`  → ${t.target}  (${t.id})`);
    }
  }
}
