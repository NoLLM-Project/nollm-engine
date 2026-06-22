// engine/evaluate_layer.js

const { loadInvariants } = require("../0_Rules/Invariants/invariant_loader");
const { loadPredicates } = require("../0_Rules/Predicates/predicate_loader");
const { buildLayerContext } = require("./context_builder");
const { buildErrorObject } = require("./build_error_object");

function evaluateLayer(layerConfig, requestContext) {
  const invariants = loadInvariants(layerConfig.invariantsPath);
  const predicates = loadPredicates(layerConfig.predicatesPath);

  for (const inv of invariants) {
    const fn = predicates[inv.when.ref];

    if (!fn) {
      throw new Error(
        `Missing predicate for ref '${inv.when.ref}' in layer '${inv.layer}'`
      );
    }

    const layerContext = buildLayerContext(inv.layer, requestContext);
    const triggered = fn(layerContext);

    if (triggered) {
      const error = buildErrorObject(inv, layerContext);
      return { error, nextContext: requestContext };
    }
  }

  // No invariant fired
  return { error: null, nextContext: requestContext };
}

module.exports = { evaluateLayer };
