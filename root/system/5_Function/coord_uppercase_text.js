/**
 * Behavior for coord_uppercase_text
 *
 * Input payload:
 * {
 *     text: "Hello world"
 * }
 *
 * Output payload:
 * {
 *     result: "HELLO WORLD"
 * }
 */

module.exports = async function(payload, context) {
    if (!payload || typeof payload.text !== "string") {
        return {
            error: "coord_uppercase_text: missing or invalid 'text' field",
            input: payload
        };
    }

    const text = payload.text.toUpperCase();

    return {
        result: text
    };
};
