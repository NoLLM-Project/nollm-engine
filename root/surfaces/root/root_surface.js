// Root Surface (inert)
// Outward-facing inert shell for the entire NoLLM system.

import { Root } from "./root.js";

export const RootSurface = {
  root: Root,		// inert reference back to the root object
  architecture: null,	// will eventually hold architecture_system_surface (inert)
  assembly: null,	// will eventually hold assembly_runtime (inert)
  world: null,	 	// will eventually hold world_runtime (inert)
  engine: null, 	// will eventually hold engine_runtime (inert)
  operational: null, 	// will eventually hold operational_runtime (inert)
  system: null		// inert reference back to the root object
};