// placement.forbidden_parent.js
// Fires when an object is placed inside a forbidden parent

module.exports = function(context) {
  const { parentId, forbiddenParents } = context.data;

  if (!parentId) return false;

  // If parentId is explicitly forbidden → violation
  if (Array.isArray(forbiddenParents) && forbiddenParents.includes(parentId)) {
    return true;
  }

  return false;
};
