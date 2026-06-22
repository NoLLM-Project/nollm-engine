/**
 * Behavior for coord_match_phrases
 *
 * Input payload:
 * {
 *     tokens: [...],
 *     atoms: [...]
 * }
 *
 * Output payload:
 * {
 *     result: [...atoms...]
 * }
 */

module.exports = async function(payload, context) {
    if (!payload || !Array.isArray(payload.tokens) || !Array.isArray(payload.atoms)) {
        return {
            error: "coord_match_phrases: missing or invalid 'tokens' or 'atoms'",
            input: payload
        };
    }

    return {
        result: payload.atoms
    };
};
