/**
 * Behavior for coord_tokenize_for_atoms
 *
 * Input payload:
 * {
 *     text: "some   input\ntext"
 * }
 *
 * Output payload:
 * {
 *     result: ["some", "input", "text"]
 * }
 */

module.exports = async function(payload, context) {
    if (!payload || typeof payload.text !== "string") {
        return {
            error: "coord_tokenize_for_atoms: missing or invalid 'text' field",
            input: payload
        };
    }

    const text = payload.text.trim();

    const tokens = text.length === 0
        ? []
        : text.split(/\s+/);

    return {
        result: tokens
    };
};
