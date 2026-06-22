// placement.unusual_parent.js
// Fires when parent is not forbidden but also not in the usual allowed list

module.exports = function(context) {
  const { parentId, allowedParents, forbiddenParents } = context.data;

  if (!parentId) return false;

  // If explicitly forbidden → handled by the hard invariant, not this one
  if (Array.isArray(forbiddenParents) && forbiddenParents.includes(parentId)) {
    return false;
  }

  // If allowedParents exists and parentId is NOT in it → soft violation
  if (Array.isArray(allowedParents) && !allowedParents.includes(parentId)) {
    return true;
  }

  return false;
};
