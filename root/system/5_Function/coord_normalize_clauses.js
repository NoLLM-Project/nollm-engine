/**
 * Behavior for coord_normalize_clauses
 *
 * Input payload:
 * {
 *     clauses: [...]
 * }
 *
 * Output payload:
 * {
 *     result: [...normalized clauses...]
 * }
 */

module.exports = async function(payload, context) {
    if (!payload || !Array.isArray(payload.clauses)) {
        return {
            error: "coord_normalize_clauses: missing or invalid 'clauses'",
            input: payload
        };
    }

    const normalized = payload.clauses.map((c, i) => ({
        ...c,
        id: i
    }));

    return {
        result: normalized
    };
};
