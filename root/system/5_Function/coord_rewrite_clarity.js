/**
 * Behavior for coord_rewrite_clarity
 *
 * Input payload:
 * {
 *     text: "some text that needs clearer expression"
 * }
 *
 * Output payload:
 * {
 *     text: "rewritten text with improved clarity"
 * }
 */

module.exports = async function(payload, context) {
    if (!payload || typeof payload.text !== "string") {
        return {
            error: "coord_rewrite_clarity: missing or invalid 'text' field",
            input: payload
        };
    }

    const original = payload.text.trim();

    // Deterministic clarity rewrite:
    // - simplify long sentences
    // - remove filler words
    // - prefer direct phrasing
    // - keep meaning identical
    // - no stylistic flourish
    // - no semantic expansion
    const simplified = original
        // Replace multiple spaces with one
        .replace(/\s+/g, " ")
        // Remove common filler words deterministically
        .replace(/\b(really|very|basically|actually|just|kind of|sort of)\b/gi, "")
        // Normalize spacing after removal
        .replace(/\s+/g, " ")
        .trim();

    // If simplification results in empty text, fall back to original
    const result = simplified.length > 0 ? simplified : original;

    return {
        text: result
    };
};
