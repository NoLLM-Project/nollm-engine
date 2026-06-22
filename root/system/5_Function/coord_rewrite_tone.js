/**
 * Behavior for coord_rewrite_tone
 *
 * Input payload:
 * {
 *     text: "hello world",
 *     tone: "uppercase"   // or "lowercase", "titlecase", "identity"
 * }
 *
 * Output payload:
 * {
 *     result: "HELLO WORLD"
 * }
 */

module.exports = async function(payload, context) {
    if (!payload || typeof payload.text !== "string") {
        return {
            error: "coord_rewrite_tone: missing or invalid 'text' field",
            input: payload
        };
    }

    if (!payload.tone || typeof payload.tone !== "string") {
        return {
            error: "coord_rewrite_tone: missing or invalid 'tone' field",
            input: payload
        };
    }

    const text = payload.text;
    const tone = payload.tone.toLowerCase();

    let result;

    switch (tone) {
        case "uppercase":
            result = text.toUpperCase();
            break;

        case "lowercase":
            result = text.toLowerCase();
            break;

        case "titlecase":
            result = text.replace(/\w\S*/g, word =>
                word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            );
            break;

        case "identity":
            result = text;
            break;

        default:
            return {
                error: `coord_rewrite_tone: unsupported tone '${tone}'`,
                supported_tones: ["uppercase", "lowercase", "titlecase", "identity"],
                input: payload
            };
    }

    return { result };
};
