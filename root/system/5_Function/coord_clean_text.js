/**
 * Behavior for coord_clean_text
 *
 * Input payload:
 * {
 *     text: "Some   text <b>with</b>\n weird   spacing\tand \u0007control chars"
 * }
 *
 * Output payload:
 * {
 *     result: "Some text with weird spacing and control chars"
 * }
 */

module.exports = async function(payload, context) {
    if (!payload || typeof payload.text !== "string") {
        return {
            error: "coord_clean_text: missing or invalid 'text' field",
            input: payload
        };
    }

    let text = payload.text;

    // 1. Remove control characters (except newline and tab if desired)
    text = text.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "");

    // 2. Strip HTML/XML tags
    text = text.replace(/<[^>]*>/g, "");

    // 3. Normalize all whitespace sequences to a single space
    text = text.replace(/\s+/g, " ");

    // 4. Trim leading/trailing whitespace
    text = text.trim();

    return {
        result: text
    };
};
