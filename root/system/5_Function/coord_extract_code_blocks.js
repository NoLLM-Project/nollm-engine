/**
 * Behavior for coord_extract_code_blocks
 *
 * Input payload:
 * {
 *     text: "some text containing ```code``` blocks"
 * }
 *
 * Output payload:
 * {
 *     code_blocks: ["console.log('hi');", "SELECT * FROM users;", ...]
 * }
 */

module.exports = async function(payload, context) {
    if (!payload || typeof payload.text !== "string") {
        return {
            error: "coord_extract_code_blocks: missing or invalid 'text' field",
            input: payload
        };
    }

    const text = payload.text;

    // Deterministic code block extraction:
    // Matches:
    // - ```code```
    // - ```js ... ```
    // - ```python ... ```
    // - ```anything ... ```
    const regex = /```(?:[\s\S]*?)```/g;

    const matches = text.match(regex) || [];

    // Clean: remove the surrounding backticks
    const cleaned = matches.map(block =>
        block.replace(/^```/, "").replace(/```$/, "").trim()
    );

    // Deduplicate
    const unique = [...new Set(cleaned)];

    return {
        code_blocks: unique
    };
};
