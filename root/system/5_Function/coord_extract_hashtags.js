/**
 * Behavior for coord_extract_hashtags
 *
 * Input payload:
 * {
 *     text: "some text containing #hashtags"
 * }
 *
 * Output payload:
 * {
 *     hashtags: ["#example", "#tag", ...]
 * }
 */

module.exports = async function(payload, context) {
    if (!payload || typeof payload.text !== "string") {
        return {
            error: "coord_extract_hashtags: missing or invalid 'text' field",
            input: payload
        };
    }

    const text = payload.text;

    // Deterministic hashtag extraction:
    // Matches:
    // - #tag
    // - #Tag123
    // - #multi_word (if underscores are used)
    const regex = /#[a-zA-Z0-9_]+/g;

    const matches = text.match(regex) || [];

    // Deduplicate
    const unique = [...new Set(matches.map(h => h.trim()))];

    return {
        hashtags: unique
    };
};
