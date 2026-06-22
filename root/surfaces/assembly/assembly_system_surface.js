// Assembly System Surface (inert)
// Outward-facing structure for the assembly system layer.

import { AssemblySystem } from "./assembly_system.js";

export const AssemblySystemSurface = {
  assembly: AssemblySystem, // inert reference back to the assembly system
  architecture: null,	// will eventually hold architecture surfaces (inert)
  world: null,	 	// will eventually hold world surfaces (inert)
  engine: null, 	// will eventually hold engine surfaces (inert)
  operational: null, 	// will eventually hold operational surfaces (inert)
  system: null		// will eventually hold system surfaces (inert)
};