/**
 * Behavior for coord_rewrite_structure
 *
 * Input payload:
 * {
 *     text: "some text that needs better structure"
 * }
 *
 * Output payload:
 * {
 *     text: "rewritten text with improved structure"
 * }
 */

module.exports = async function(payload, context) {
    if (!payload || typeof payload.text !== "string") {
        return {
            error: "coord_rewrite_structure: missing or invalid 'text' field",
            input: payload
        };
    }

    const original = payload.text.trim();

    // Deterministic structural rewrite:
    // - split into sentences
    // - trim each sentence
    // - remove empty ones
    // - reorder by length (short → long) for structural clarity
    // - join with clean spacing
    const sentences = original
        .split(/[.!?]+/)
        .map(s => s.trim())
        .filter(s => s.length > 0);

    const reordered = sentences
        .sort((a, b) => a.length - b.length)
        .map(s => s.charAt(0).toUpperCase() + s.slice(1));

    const result = reordered.join(". ") + ".";

    return {
        text: result
    };
};
