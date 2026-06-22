/**
 * Behavior for coord_generate_text_literal
 *
 * Input payload:
 * {
 *     text: "Some text exactly as provided."
 * }
 *
 * Output payload:
 * {
 *     result: "Some text exactly as provided."
 * }
 */

module.exports = async function(payload, context) {
    if (!payload || typeof payload.text !== "string") {
        return {
            error: "coord_generate_text_literal: missing or invalid 'text' field",
            input: payload
        };
    }

    // Deterministic identity output
    return {
        result: payload.text
    };
};
