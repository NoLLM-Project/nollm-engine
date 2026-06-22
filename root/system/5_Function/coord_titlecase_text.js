/**
 * Behavior for coord_titlecase_text
 *
 * Input payload:
 * {
 *     text: "hello world from the farm"
 * }
 *
 * Output payload:
 * {
 *     result: "Hello World From The Farm"
 * }
 */

module.exports = async function(payload, context) {
    if (!payload || typeof payload.text !== "string") {
        return {
            error: "coord_titlecase_text: missing or invalid 'text' field",
            input: payload
        };
    }

    const text = payload.text;

    // Title-case each word deterministically
    const result = text.replace(/\w\S*/g, word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    return {
        result
    };
};
