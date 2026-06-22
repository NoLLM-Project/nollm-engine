// Governance Subsystem Index (inert)
// Exposes the governance subsystem components without wiring or behavior.

export { GovernanceDescriptor } from "./descriptor.js";
export { GovernanceRegistry } from "./registry.js";

export { Capabilities } from "./capabilities.js";
export { Responsibilities } from "./responsibilities.js";
export { Permissions } from "./permissions.js";
export { Constraints } from "./constraints.js";
export { Interfaces } from "./interfaces.js";
export { Surfaces } from "./surfaces.js";

// Notes:
// - This index does not activate or enforce governance logic.
// - It simply exposes the governance subsystem as a coherent module.
// - Fully reversible and non-intrusive.
