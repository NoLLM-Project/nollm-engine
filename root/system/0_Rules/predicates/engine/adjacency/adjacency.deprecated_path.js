// adjacency.deprecated_path.js
// Fires when movement uses a path marked as deprecated

module.exports = function(context) {
  const { from, to, deprecatedPaths } = context.data;

  if (!from || !to) return false;
  if (!Array.isArray(deprecatedPaths)) return false;

  // If the pair [from → to] is in deprecatedPaths → soft violation
  return deprecatedPaths.some(path =>
    path.from === from && path.to === to
  );
};
