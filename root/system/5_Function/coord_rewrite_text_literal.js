/**
 * Behavior for coord_rewrite_text_literal
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
            error: "coord_rewrite_text_literal: missing or invalid 'text' field",
            input: payload
        };
    }

    // Deterministic identity rewrite
    return {
        result: payload.text
    };
};
