/**
 * Behavior for coord_segment_clauses
 *
 * Input payload:
 * {
 *     chunks: [...],
 *     tokens: [...]
 * }
 *
 * Output payload:
 * {
 *     result: [
 *         { id: 0, chunks: [...] }
 *     ]
 * }
 */

module.exports = async function(payload, context) {
    if (!payload || !Array.isArray(payload.chunks) || !Array.isArray(payload.tokens)) {
        return {
            error: "coord_segment_clauses: missing or invalid 'chunks' or 'tokens'",
            input: payload
        };
    }

    const clauses = [
        {
            id: 0,
            chunks: payload.chunks
        }
    ];

    return {
        result: clauses
    };
};
