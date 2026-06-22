// semantic.deprecated_wrapper.js
// Fires when the wrapper is known but marked as deprecated

module.exports = function(context) {
  const { wrapper, semanticMap } = context.data;

  if (!wrapper) return false;
  if (!semanticMap) return false;

  const entry = semanticMap[wrapper];

  // If wrapper exists but is marked deprecated → soft violation
  if (entry && entry.deprecated === true) {
    return true;
  }

  return false;
};
