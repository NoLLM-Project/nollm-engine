/**
 * Behavior for coord_extract_quotes
 *
 * Input payload:
 * {
 *     text: "some text containing 'quotes' or \"quotes\""
 * }
 *
 * Output payload:
 * {
 *     quotes: ["quoted text", "another quoted text", ...]
 * }
 */

module.exports = async function(payload, context) {
    if (!payload || typeof payload.text !== "string") {
        return {
            error: "coord_extract_quotes: missing or invalid 'text' field",
            input: payload
        };
    }

    const text = payload.text;

    // Deterministic quote extraction:
    // Matches:
    // - "double quoted text"
    // - 'single quoted text'
    const regex = /"([^"]+)"|'([^']+)'/g;

    const results = [];
    let match;

    while ((match = regex.exec(text)) !== null) {
        // match[1] = double-quoted content
        // match[2] = single-quoted content
        const content = match[1] || match[2];
        if (content && content.trim().length > 0) {
            results.push(content.trim());
        }
    }

    // Deduplicate
    const unique = [...new Set(results)];

    return {
        quotes: unique
    };
};
