// adjacency.not_adjacent.js
// Fires when movement from → to is not allowed by adjacencyList

module.exports = function(context) {
  const { from, to, adjacencyList } = context.data;

  if (!from || !to) return false;

  // adjacencyList[from] must contain to
  const neighbors = adjacencyList[from] || [];

  if (!neighbors.includes(to)) {
    return true; // violation
  }

  return false;
};
