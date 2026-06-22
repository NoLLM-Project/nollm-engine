/**
 * Behavior for coord_detokenize_text
 *
 * Input payload:
 * {
 *     tokens: ["hello", "world", "this", "is", "fine"]
 * }
 *
 * Output payload:
 * {
 *     result: "hello world this is fine"
 * }
 */

module.exports = async function(payload, context) {
    if (!payload || !Array.isArray(payload.tokens)) {
        return {
            error: "coord_detokenize_text: missing or invalid 'tokens' field",
            input: payload
        };
    }

    // Ensure all elements are strings
    const safeTokens = payload.tokens.map(t =>
        typeof t === "string" ? t : String(t)
    );

    const result = safeTokens.join(" ");

    return {
        result
    };
};
