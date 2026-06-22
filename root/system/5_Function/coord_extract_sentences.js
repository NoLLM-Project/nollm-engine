/**
 * Behavior for coord_extract_sentences
 *
 * Input payload:
 * {
 *     text: "some text containing multiple sentences."
 * }
 *
 * Output payload:
 * {
 *     sentences: ["First sentence.", "Second sentence.", ...]
 * }
 */

module.exports = async function(payload, context) {
    if (!payload || typeof payload.text !== "string") {
        return {
            error: "coord_extract_sentences: missing or invalid 'text' field",
            input: payload
        };
    }

    const text = payload.text.trim();

    // Deterministic sentence extraction:
    // Split on ., ?, ! while preserving the punctuation.
    const regex = /[^.!?]+[.!?]/g;

    const matches = text.match(regex) || [];

    // Clean and trim each sentence
    const cleaned = matches.map(s => s.trim());

    // Deduplicate
    const unique = [...new Set(cleaned)];

    return {
        sentences: unique
    };
};
