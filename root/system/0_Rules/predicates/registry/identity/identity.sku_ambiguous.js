// identity.sku_ambiguous.js
// Fires when metadata resolves to multiple possible SKUs

module.exports = function(context) {
  const { metadata, skuCandidates } = context.data;

  if (!metadata) return false;
  if (!Array.isArray(skuCandidates)) return false;

  // If more than one SKU candidate → soft violation
  if (skuCandidates.length > 1) {
    return true;
  }

  return false;
};
