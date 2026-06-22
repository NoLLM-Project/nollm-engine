// System System Surface (inert)
// Outward-facing structure for the system-level layer.

import { SystemSystem } from "./system_system.js";

export const SystemSystemSurface = {
  system: SystemSystem,	 // inert reference back to the system system
  operational: null, 	// will eventually hold operational surfaces (inert)
  engine: null, 	// will eventually hold engine surfaces (inert)
  world: null,	 	// will eventually hold world surfaces (inert)
  assembly: null, 	// will eventually hold assembly surfaces (inert)
  architecture: null 	// will eventually hold architecture surfaces (inert)
};