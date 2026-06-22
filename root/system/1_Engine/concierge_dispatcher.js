// concierge_dispatcher.js
// Walks the error chain and renders each layer's message.
// Pure dispatcher: no interpretation, no rewriting.

const { renderConciergeMessage } = require("./concierge_renderer");

function dispatchConciergeMessages(errorChain, mode = "long") {
  if (!errorChain) return [];

  const messages = [];

  let current = errorChain;
  while (current) {
    const text = renderConciergeMessage({
      layer: current.layer,
      message_key: current.message_key,
      severity: current.severity,
      mode
    });

    messages.push({
      layer: current.layer,
      message_key: current.message_key,
      severity: current.severity,
      text
    });

    current = current.details?.inner || null;
  }

  return messages;
}

module.exports = { dispatchConciergeMessages };
