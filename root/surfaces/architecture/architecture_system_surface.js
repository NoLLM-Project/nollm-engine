// Architecture System Surface (inert)
// Outward-facing structure for the architecture system layer.

import { ArchitectureSystem } from "./architecture_system.js";

export const ArchitectureSystemSurface = {
  architecture: ArchitectureSystem,	// inert reference back to the architecture system
  assembly: null, 		// will eventually hold architecture assembly surfaces (inert)
  world: null, 			// will eventually hold architecture world surfaces (inert)
  engine: null, 		// will eventually hold architecture engine surfaces (inert)
  operational: null, 		// will eventually hold architecture operational surfaces (inert)
  system: null			// will eventually hold architecture system surfaces (inert)
};