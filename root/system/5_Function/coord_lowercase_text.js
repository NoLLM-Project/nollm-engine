/**
 * Behavior for coord_lowercase_text
 *
 * Input payload:
 * {
 *     text: "Hello WORLD"
 * }
 *
 * Output payload:
 * {
 *     result: "hello world"
 * }
 */

module.exports = async function(payload, context) {
    if (!payload || typeof payload.text !== "string") {
        return {
            error: "coord_lowercase_text: missing or invalid 'text' field",
            input: payload
        };
    }

    const text = payload.text.toLowerCase();

    return {
        result: text
    };
};
