/**
 * Behavior for coord_resolve_atoms
 *
 * Input payload:
 * {
 *     tokens: ["hello", "world"]
 * }
 *
 * Output payload:
 * {
 *     result: [
 *         { token: "hello", atom: "HELLO" },
 *         { token: "world", atom: "WORLD" }
 *     ]
 * }
 */

module.exports = async function(payload, context) {
    if (!payload || !Array.isArray(payload.tokens)) {
        return {
            error: "coord_resolve_atoms: missing or invalid 'tokens' field",
            input: payload
        };
    }

    const atoms = payload.tokens.map(t => ({
        token: t,
        atom: t.toUpperCase()
    }));

    return {
        result: atoms
    };
};
