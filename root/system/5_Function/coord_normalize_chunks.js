/**
 * Behavior for coord_normalize_chunks
 *
 * Input payload:
 * {
 *     chunks: [...]
 * }
 *
 * Output payload:
 * {
 *     result: [...normalized chunks...]
 * }
 */

module.exports = async function(payload, context) {
    if (!payload || !Array.isArray(payload.chunks)) {
        return {
            error: "coord_normalize_chunks: missing or invalid 'chunks'",
            input: payload
        };
    }

    const normalized = payload.chunks.map((c, i) => ({
        ...c,
        id: i
    }));

    return {
        result: normalized
    };
};
