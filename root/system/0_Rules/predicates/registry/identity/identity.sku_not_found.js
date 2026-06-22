// identity.sku_not_found.js
// Fires when metadata exists but no SKU can be resolved

module.exports = function(context) {
  const { metadata, sku, skuCandidates } = context.data;

  // If metadata exists but no SKU resolved → violation
  if (metadata && !sku) return true;

  // If metadata exists but candidate list is empty → violation
  if (metadata && Array.isArray(skuCandidates) && skuCandidates.length === 0) {
    return true;
  }

  return false;
};
