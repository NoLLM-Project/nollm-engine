/**
 * Behavior for coord_generate_list
 *
 * Input payload:
 * {
 *     text: "some text that should become a list"
 * }
 *
 * Output payload:
 * {
 *     list: ["item1", "item2", ...]
 * }
 */

module.exports = async function(payload, context) {
    if (!payload || typeof payload.text !== "string") {
        return {
            error: "coord_generate_list: missing or invalid 'text' field",
            input: payload
        };
    }

    const text = payload.text.trim();

    // Deterministic list generation:
    // - split on newlines OR punctuation
    // - trim each item
    // - filter out empty entries
    // - return as an array
    const rawItems = text
        .split(/[\n•\-–—,;]+/g)   // common list separators
        .map(item => item.trim())
        .filter(item => item.length > 0);

    return {
        list: rawItems
    };
};
