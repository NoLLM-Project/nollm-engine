// concierge_narrator.js
// Converts dispatcher output into a human-readable narrative.
// Pure formatting: no interpretation, no rewriting, no inference.

function narrateConciergeMessages(messages) {
  if (!messages || messages.length === 0) {
    return "";
  }

  // Each message is already fully rendered text from the renderer.
  // We simply join them into a readable narrative.
  const lines = messages.map(entry => {
    return entry.text;
  });

  // Join with blank lines between layers for readability
  return lines.join("\n\n");
}

module.exports = { narrateConciergeMessages };
