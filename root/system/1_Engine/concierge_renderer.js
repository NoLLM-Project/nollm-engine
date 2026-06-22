// concierge_renderer.js
// Pure renderer: selects the correct concierge message text.
// No interpretation, no mutation, no inference.

const { loadConciergeMessages } = require("../0_Rules/ConciergeMessages/concierge_message_loader");

function renderConciergeMessage({ layer, message_key, severity, mode }) {
  // Determine which folder to load based on layer
  const layerRoot = layerToFolder(layer);

  // Load all messages for that layer
  const messages = loadConciergeMessages(layerRoot);

  const entry = messages[message_key];
  if (!entry) {
    throw new Error(`Missing concierge message for key '${message_key}' in layer '${layer}'`);
  }

  const severityBlock = entry[severity];
  if (!severityBlock) {
    throw new Error(
      `Missing severity '${severity}' for message_key '${message_key}' in layer '${layer}'`
    );
  }

  const text = severityBlock[mode];
  if (!text) {
    throw new Error(
      `Missing mode '${mode}' for message_key '${message_key}' in layer '${layer}'`
    );
  }

  return text;
}

// Maps engine layer → concierge folder
function layerToFolder(layer) {
  if (layer.startsWith("field.")) return "Field";
  if (layer.startsWith("registry.")) return "Registry";
  if (layer.startsWith("world.")) return "World";
  if (layer.startsWith("engine.")) return "Engine";

  throw new Error(`Unknown layer '${layer}'`);
}

module.exports = { renderConciergeMessage };
