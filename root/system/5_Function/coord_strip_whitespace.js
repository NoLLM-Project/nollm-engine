/**
 * Behavior for coord_strip_whitespace
 *
 * Input payload:
 * {
 *     text: "   some text with padding   "
 * }
 *
 * Output payload:
 * {
 *     result: "some text with padding"
 * }
 */

module.exports = async function(payload, context) {
    if (!payload || typeof payload.text !== "string") {
        return {
            error: "coord_strip_whitespace: missing or invalid 'text' field",
            input: payload
        };
    }

    const text = payload.text.trim();

    return {
        result: text
    };
};
