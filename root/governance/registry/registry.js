// Governance Registry (inert)
// Lists all governance subsystem components without wiring or behavior.

import { Capabilities } from "./capabilities.js";
import { Responsibilities } from "./responsibilities.js";
import { Permissions } from "./permissions.js";
import { Constraints } from "./constraints.js";
import { Interfaces } from "./interfaces.js";
import { Surfaces } from "./surfaces.js";
import { GovernanceDescriptor } from "./descriptor.js";

export const GovernanceRegistry = {
  name: "GovernanceRegistry",
  version: "0.0.1-inert",

  descriptor: GovernanceDescriptor,

  components: {
    capabilities: Capabilities,
    responsibilities: Responsibilities,
    permissions: Permissions,
    constraints: Constraints,
    interfaces: Interfaces,
    surfaces: Surfaces
  },

  notes: [
    "This registry is inert and non-behavioral.",
    "It does not wire or activate any governance logic.",
    "It simply lists governance subsystem components.",
    "Fully reversible and safe."
  ]
};
