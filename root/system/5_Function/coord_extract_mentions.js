/**
 * Behavior for coord_extract_mentions
 *
 * Input payload:
 * {
 *     text: "some text containing @mentions"
 * }
 *
 * Output payload:
 * {
 *     mentions: ["@user1", "@someone", ...]
 * }
 */

module.exports = async function(payload, context) {
    if (!payload || typeof payload.text !== "string") {
        return {
            error: "coord_extract_mentions: missing or invalid 'text' field",
            input: payload
        };
    }

    const text = payload.text;

    // Deterministic mention extraction:
    // Matches:
    // - @username
    // - @User_123
    // - @multi_word (if underscores are used)
    const regex = /@[a-zA-Z0-9_]+/g;

    const matches = text.match(regex) || [];

    // Deduplicate
    const unique = [...new Set(matches.map(m => m.trim()))];

    return {
        mentions: unique
    };
};
