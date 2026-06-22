// concierge_message_loader.js
// Loads concierge messages for a given layer/domain.
// Pure loader: no interpretation, no mutation, no inference.

const fs = require("fs");
const path = require("path");

function loadConciergeMessages(layerPath) {
  const baseDir = path.join(__dirname, layerPath);

  if (!fs.existsSync(baseDir)) {
    throw new Error(`Concierge message directory not found: ${baseDir}`);
  }

  const files = fs.readdirSync(baseDir).filter(f => f.endsWith(".json"));

  const messages = {};

  for (const file of files) {
    const fullPath = path.join(baseDir, file);
    const raw = fs.readFileSync(fullPath, "utf8");
    const json = JSON.parse(raw);

    // Merge message keys into the dictionary
    for (const key of Object.keys(json)) {
      if (messages[key]) {
        throw new Error(
          `Duplicate concierge message_key '${key}' in file: ${fullPath}`
        );
      }
      messages[key] = json[key];
    }
  }

  return messages;
}

module.exports = { loadConciergeMessages };
