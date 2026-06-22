// semantic.no_metadata.js
// Fires when wrapper has no metadata mapping

module.exports = function(context) {
  const { wrapper, metadata, semanticMap } = context.data;

  // If wrapper exists but metadata is missing → violation
  if (wrapper && !metadata) return true;

  // If wrapper exists but semanticMap has no entry → violation
  if (wrapper && semanticMap && !semanticMap[wrapper]) return true;

  return false;
};
