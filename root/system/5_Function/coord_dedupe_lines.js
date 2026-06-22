/**
 * Behavior for coord_dedupe_lines
 *
 * Input payload:
 * {
 *     text: "apple\nbanana\napple\ncarrot\nbanana"
 * }
 *
 * Output payload:
 * {
 *     result: "apple\nbanana\ncarrot"
 * }
 */

module.exports = async function(payload, context) {
    if (!payload || typeof payload.text !== "string") {
        return {
            error: "coord_dedupe_lines: missing or invalid 'text' field",
            input: payload
        };
    }

    const text = payload.text;

    // Split into lines
    const lines = text.split(/\r?\n/);

    // Preserve order while removing duplicates
    const seen = new Set();
    const deduped = [];

    for (const line of lines) {
        if (!seen.has(line)) {
            seen.add(line);
            deduped.push(line);
        }
    }

    const result = deduped.join("\n");

    return {
        result
    };
};
