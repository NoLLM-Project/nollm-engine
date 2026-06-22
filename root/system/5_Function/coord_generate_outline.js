/**
 * Behavior for coord_generate_outline
 *
 * Input payload:
 * {
 *     items: ["Introduction", "Methods", "Results"]
 * }
 *
 * Output payload:
 * {
 *     result: "1. Introduction\n2. Methods\n3. Results"
 * }
 */

module.exports = async function(payload, context) {
    if (!payload || !Array.isArray(payload.items)) {
        return {
            error: "coord_generate_outline: missing or invalid 'items' field",
            input: payload
        };
    }

    // Deterministic numbering: 1., 2., 3., ...
    const lines = payload.items.map((item, index) => {
        return `${index + 1}. ${String(item)}`;
    });

    return {
        result: lines.join("\n")
    };
};
