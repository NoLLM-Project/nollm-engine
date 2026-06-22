// 0_Rules/Predicates/predicate_loader.js

const fs = require("fs");
const path = require("path");

function loadPredicates(layerPath) {
    const baseDir = path.join(__dirname, layerPath);

    if (!fs.existsSync(baseDir)) {
        throw new Error(`Predicate directory not found: ${baseDir}`);
    }

    const files = fs.readdirSync(baseDir);
    const predicates = {};

    for (const file of files) {
        if (!file.endsWith(".js")) continue;

        // Enforce naming convention: category.name.js
        const parts = file.replace(".js", "").split(".");
        if (parts.length !== 2) {
            throw new Error(
                `Invalid predicate filename: ${file}. Expected <category>.<name>.js`
            );
        }

        const [category, name] = parts;
        const predicateRef = `${category}.${name}`;

        const fullPath = path.join(baseDir, file);
        const fn = require(fullPath);

        // Validate function signature
        if (typeof fn !== "function") {
            throw new Error(`Predicate ${predicateRef} does not export a function.`);
        }

        if (fn.length !== 1) {
            throw new Error(
                `Predicate ${predicateRef} must accept exactly one argument (context).`
            );
        }

        // Wrap to enforce boolean return
        predicates[predicateRef] = (context) => {
            const result = fn(context);

            if (typeof result !== "boolean") {
                throw new Error(
                    `Predicate ${predicateRef} must return a boolean, got ${typeof result}.`
                );
            }

            return result;
        };
    }

    return predicates;
}

module.exports = { loadPredicates };
