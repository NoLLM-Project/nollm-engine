/**
 * Behavior for coord_parse_json
 *
 * Input payload:
 * {
 *     text: "{ \"a\": 1, \"b\": 2 }"
 * }
 *
 * Output payload (success):
 * {
 *     ok: true,
 *     data: { a: 1, b: 2 }
 * }
 *
 * Output payload (error):
 * {
 *     ok: false,
 *     error: "JSON parse error: ...",
 *     input: "{ ... }"
 * }
 */

module.exports = async function(payload, context) {
    if (!payload || typeof payload.text !== "string") {
        return {
            ok: false,
            error: "coord_parse_json: missing or invalid 'text' field",
            input: payload
        };
    }

    const text = payload.text.trim();

    try {
        const parsed = JSON.parse(text);
        return {
            ok: true,
            data: parsed
        };
    } catch (err) {
        return {
            ok: false,
            error: "JSON parse error: " + err.message,
            input: text
        };
    }
};
