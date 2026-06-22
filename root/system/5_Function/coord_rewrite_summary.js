/**
 * Behavior for coord_rewrite_summary
 *
 * Input payload:
 * {
 *     text: "some text that needs summarization"
 * }
 *
 * Output payload:
 * {
 *     summary: "shortened version of the text"
 * }
 */

module.exports = async function(payload, context) {
    if (!payload || typeof payload.text !== "string") {
        return {
            error: "coord_rewrite_summary: missing or invalid 'text' field",
            input: payload
        };
    }

    const original = payload.text.trim();

    // Deterministic summary:
    // - split into sentences
    // - take the first 2 sentences OR first 30 words
    // - no semantic inference
    // - no meaning expansion
    // - no stylistic rewriting
    const sentences = original
        .split(/[.!?]+/)
        .map(s => s.trim())
        .filter(s => s.length > 0);

    let summary = "";

    if (sentences.length > 0) {
        // Take first two sentences
        summary = sentences.slice(0, 2).join(". ");
    } else {
        // Fallback: word-based truncation
        summary = original.split(/\s+/).slice(0, 30).join(" ");
    }

    summary = summary.trim();

    if (summary.length === 0) {
        summary = original;
    }

    // Ensure clean ending punctuation
    if (!/[.!?]$/.test(summary)) {
        summary += ".";
    }

    return {
        summary
    };
};
