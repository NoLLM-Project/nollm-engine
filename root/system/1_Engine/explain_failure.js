// explain_failure.js
// Final wiring: engine → dispatcher → narrator
// Pure orchestration: no interpretation, no rewriting.

const { evaluatePipeline } = require("./invariant_engine");
const { dispatchConciergeMessages } = require("./concierge_dispatcher");
const { narrateConciergeMessages } = require("./concierge_narrator");

function explainFailure(requestContext, mode = "long") {
  const result = evaluatePipeline(requestContext);

  if (result.ok) {
    return {
      ok: true,
      narrative: "",
      messages: [],
      error: null
    };
  }

  // Step 1: walk the error chain
  const messages = dispatchConciergeMessages(result.error, mode);

  // Step 2: convert to human-readable narrative
  const narrative = narrateConciergeMessages(messages);

  return {
    ok: false,
    narrative,
    messages,
    error: result.error
  };
}

module.exports = { explainFailure };
