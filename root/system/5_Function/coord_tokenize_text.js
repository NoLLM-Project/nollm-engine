/**
 * Behavior for coord_tokenize_text
 *
 * Input payload:
 * {
 *     text: "hello   world\nthis is\tfine"
 * }
 *
 * Output payload:
 * {
 *     result: ["hello", "world", "this", "is", "fine"]
 * }
 */

module.exports = async function(payload, context) {
    if (!payload || typeof payload.text !== "string") {
        return {
            error: "coord_tokenize_text: missing or invalid 'text' field",
            input: payload
        };
    }

    const text = payload.text;

    // Split on any whitespace sequence
    const tokens = text.trim().length === 0
        ? []
        : text.trim().split(/\s+/);

    return {
        result: tokens
    };
};
