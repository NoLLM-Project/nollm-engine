import { loadJson } from "../../../utils/loadJson.js";

export async function loadSKUInvariants() {
    return await loadJson("../../3_Registry/SKUs/sku_invariants.json");
}
