/**
 * Behavior for coord_generate_description
 *
 * Input payload:
 * {
 *     items: ["Line one", "Line two", "Line three"]
 * }
 *
 * Output payload:
 * {
 *     result: "Line one\nLine two\nLine three"
 * }
 */

module.exports = async function(payload, context) {
    if (!payload || !Array.isArray(payload.items)) {
        return {
            error: "coord_generate_description: missing or invalid 'items' field",
            input: payload
        };
    }

    // Coerce all items to strings deterministically
    const lines = payload.items.map(item => String(item));

    return {
        result: lines.join("\n")
    };
};
