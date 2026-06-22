/**
 * Behavior for coord_assemble_sentence
 *
 * Input payload:
 * {
 *     tokens: [...],
 *     atoms: [...],
 *     chunks: [...],
 *     clauses: [...]
 * }
 *
 * Output payload:
 * {
 *     result: { tokens, atoms, chunks, clauses }
 * }
 */

module.exports = async function(payload, context) {
    if (!payload ||
        !Array.isArray(payload.tokens) ||
        !Array.isArray(payload.atoms) ||
        !Array.isArray(payload.chunks) ||
        !Array.isArray(payload.clauses)) {
        return {
            error: "coord_assemble_sentence: missing or invalid fields",
            input: payload
        };
    }

    return {
        result: {
            tokens: payload.tokens,
            atoms: payload.atoms,
            chunks: payload.chunks,
            clauses: payload.clauses
        }
    };
};
