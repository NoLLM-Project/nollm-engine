/**
 * Behavior for coord_extract_paragraphs
 *
 * Input payload:
 * {
 *     text: "some text containing multiple paragraphs"
 * }
 *
 * Output payload:
 * {
 *     paragraphs: ["Paragraph 1...", "Paragraph 2...", ...]
 * }
 */

module.exports = async function(payload, context) {
    if (!payload || typeof payload.text !== "string") {
        return {
            error: "coord_extract_paragraphs: missing or invalid 'text' field",
            input: payload
        };
    }

    const text = payload.text;

    // Deterministic paragraph extraction:
    // Split on blank lines (one or more newlines)
    const raw = text.split(/\n\s*\n+/);

    // Clean and trim each paragraph
    const cleaned = raw
        .map(p => p.trim())
        .filter(p => p.length > 0);

    // Deduplicate
    const unique = [...new Set(cleaned)];

    return {
        paragraphs: unique
    };
};
