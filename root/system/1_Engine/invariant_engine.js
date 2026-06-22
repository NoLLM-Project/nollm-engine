// engine/invariant_engine.js

const layers = require("./layers");
const { evaluateLayer } = require("./evaluate_layer");
const { chainError } = require("./error_chain");

function evaluatePipeline(requestContext) {
  let currentContext = requestContext;
  let errorChain = null;

  for (const layer of layers) {
    const result = evaluateLayer(layer, currentContext);

    if (result.error) {
      errorChain = errorChain
        ? chainError(result.error, errorChain)
        : result.error;

      if (result.error.severity === "hard") {
        return { ok: false, error: errorChain };
      }
    }

    currentContext = result.nextContext || currentContext;
  }

  return { ok: true, error: null };
}

module.exports = { evaluatePipeline };
