// 0_Rules/Invariants/invariant_loader.js

const fs = require("fs");
const path = require("path");

function loadInvariants(layerPath) {
    const baseDir = path.join(__dirname, layerPath);

    if (!fs.existsSync(baseDir)) {
        throw new Error(`Invariant directory not found: ${baseDir}`);
    }

    const files = fs.readdirSync(baseDir);
    const invariants = [];

    for (const file of files) {
        if (!file.endsWith(".json")) continue;

        // Enforce naming convention: INV_*.json
        if (!file.startsWith("INV_")) {
            throw new Error(
                `Invalid invariant filename: ${file}. Expected INV_<NAME>.json`
            );
        }

        const fullPath = path.join(baseDir, file);
        const raw = fs.readFileSync(fullPath, "utf8");
        const inv = JSON.parse(raw);

        validateInvariant(inv, file);

        invariants.push(inv);
    }

    return invariants;
}

function validateInvariant(inv, filename) {
    const requiredFields = [
        "id",
        "layer",
        "severity",
        "scope",
        "when",
        "effect"
    ];

    for (const field of requiredFields) {
        if (!(field in inv)) {
            throw new Error(
                `Invariant ${filename} missing required field: ${field}`
            );
        }
    }

    if (!["soft", "hard"].includes(inv.severity)) {
        throw new Error(
            `Invariant ${filename} has invalid severity: ${inv.severity}`
        );
    }

    if (!inv.when.ref || typeof inv.when.ref !== "string") {
        throw new Error(
            `Invariant ${filename} must have when.ref as a string`
        );
    }

    if (!inv.effect.code || !inv.effect.message_key) {
        throw new Error(
            `Invariant ${filename} must have effect.code and effect.message_key`
        );
    }

    // No functions allowed
    if (typeof inv === "function") {
        throw new Error(
            `Invariant ${filename} must be pure JSON, not a function`
        );
    }
}

module.exports = { loadInvariants };
