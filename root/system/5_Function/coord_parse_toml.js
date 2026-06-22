/**
 * Behavior for coord_parse_toml
 *
 * Input payload:
 * {
 *     text: "a = 1\nb = 2\n[section]\nc = 3"
 * }
 *
 * Output payload (success):
 * {
 *     ok: true,
 *     data: { a: 1, b: 2, section: { c: 3 } }
 * }
 *
 * Output payload (error):
 * {
 *     ok: false,
 *     error: "TOML parse error: ...",
 *     input: "..."
 * }
 */

const toml = require("@iarna/toml");

module.exports = async function(payload, context) {
    if (!payload || typeof payload.text !== "string") {
        return {
            ok: false,
            error: "coord_parse_toml: missing or invalid 'text' field",
            input: payload
        };
    }

    const text = payload.text.trim();

    try {
        const parsed = toml.parse(text);
        return {
            ok: true,
            data: parsed
        };
    } catch (err) {
        return {
            ok: false,
            error: "TOML parse error: " + err.message,
            input: text
        };
    }
};
