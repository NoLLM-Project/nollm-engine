/**
 * Behavior for coord_generate_bullets
 *
 * Input payload:
 * {
 *     items: ["apple", "banana", "carrot"]
 * }
 *
 * Output payload:
 * {
 *     result: "- apple\n- banana\n- carrot"
 * }
 */

module.exports = async function(payload, context) {
    if (!payload || !Array.isArray(payload.items)) {
        return {
            error: "coord_generate_bullets: missing or invalid 'items' field",
            input: payload
        };
    }

    // Coerce all items to strings deterministically
    const lines = payload.items.map(item => `- ${String(item)}`);

    return {
        result: lines.join("\n")
    };
};
