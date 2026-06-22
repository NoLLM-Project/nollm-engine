/**
 * Behavior for coord_rewrite_professionalism
 *
 * Input payload:
 * {
 *     text: "some text that needs a more professional tone"
 * }
 *
 * Output payload:
 * {
 *     text: "rewritten text with a more professional tone"
 * }
 */

module.exports = async function(payload, context) {
    if (!payload || typeof payload.text !== "string") {
        return {
            error: "coord_rewrite_professionalism: missing or invalid 'text' field",
            input: payload
        };
    }

    const original = payload.text.trim();

    // Deterministic professionalism rewrite:
    // - remove slang
    // - replace casual phrasing with formal equivalents
    // - normalize contractions
    // - ensure clean sentence boundaries
    let rewritten = original;

    // Remove common slang
    rewritten = rewritten.replace(/\b(gonna|wanna|kinda|sorta|gotta|ain't)\b/gi, function(match) {
        const map = {
            "gonna": "going to",
            "wanna": "want to",
            "kinda": "somewhat",
            "sorta": "somewhat",
            "gotta": "have to",
            "ain't": "is not"
        };
        return map[match.toLowerCase()] || match;
    });

    // Replace casual connectors
    rewritten = rewritten.replace(/\b(like|you know|basically|pretty much)\b/gi, "");

    // Expand contractions deterministically
    rewritten = rewritten
        .replace(/\bcan't\b/gi, "cannot")
        .replace(/\bwon't\b/gi, "will not")
        .replace(/\bdon't\b/gi, "do not")
        .replace(/\bdoesn't\b/gi, "does not")
        .replace(/\bI'm\b/gi, "I am")
        .replace(/\bwe're\b/gi, "we are")
        .replace(/\bthey're\b/gi, "they are")
        .replace(/\bit's\b/gi, "it is");

    // Normalize spacing
    rewritten = rewritten.replace(/\s+/g, " ").trim();

    // Ensure ending punctuation
    if (!/[.!?]$/.test(rewritten)) {
        rewritten += ".";
    }

    return {
        text: rewritten
    };
};
