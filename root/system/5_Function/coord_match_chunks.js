/**
 * Behavior for coord_match_chunks
 *
 * Input payload:
 * {
 *     atoms: [...]
 * }
 *
 * Output payload:
 * {
 *     result: [
 *         { id: 0, atoms: [atom0] },
 *         { id: 1, atoms: [atom1] },
 *         ...
 *     ]
 * }
 */

module.exports = async function(payload, context) {
    if (!payload || !Array.isArray(payload.atoms)) {
        return {
            error: "coord_match_chunks: missing or invalid 'atoms'",
            input: payload
        };
    }

    const chunks = payload.atoms.map((a, i) => ({
        id: i,
        atoms: [a]
    }));

    return {
        result: chunks
    };
};
