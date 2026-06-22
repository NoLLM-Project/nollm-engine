// engine/build_error_object.js

function buildErrorObject(invariant, layerContext) {
  return {
    error_id: invariant.effect.code,          // e.g. "E_ADJ_NOT_ADJACENT"
    invariant_id: invariant.id,              // e.g. "INV_ADJ_NOT_ADJACENT"
    layer: invariant.layer,                  // e.g. "engine.adjacency"
    severity: invariant.severity,            // "soft" | "hard"
    message_key: invariant.effect.message_key, // e.g. "adjacency.not_adjacent"
    details: {
      context: layerContext.data
    }
  };
}

module.exports = { buildErrorObject };
