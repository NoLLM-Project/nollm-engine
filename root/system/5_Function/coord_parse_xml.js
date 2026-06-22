/**
 * Behavior for coord_parse_xml
 *
 * Input payload:
 * {
 *     text: "<root><a>1</a><b>2</b></root>"
 * }
 *
 * Output payload (success):
 * {
 *     ok: true,
 *     data: { root: { a: "1", b: "2" } }
 * }
 *
 * Output payload (error):
 * {
 *     ok: false,
 *     error: "XML parse error: ...",
 *     input: "..."
 * }
 */

const { XMLParser } = require("fast-xml-parser");

module.exports = async function(payload, context) {
    if (!payload || typeof payload.text !== "string") {
        return {
            ok: false,
            error: "coord_parse_xml: missing or invalid 'text' field",
            input: payload
        };
    }

    const text = payload.text.trim();

    try {
        const parser = new XMLParser({
            ignoreAttributes: false,
            attributeNamePrefix: "@_"
        });

        const parsed = parser.parse(text);

        return {
            ok: true,
            data: parsed
        };
    } catch (err) {
        return {
            ok: false,
            error: "XML parse error: " + err.message,
            input: text
        };
    }
};
