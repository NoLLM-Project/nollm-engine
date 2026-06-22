// Engine System (inert)
// Holds the engine-level surfaces.

import { EngineSystemSurface } from "./engine_system_surface.js";

export const EngineSystemSurface = {
  engine: EngineSystemSurface, 	// inert reference
  world: null, 		// will eventually hold world surfaces (inert)
  assembly: null, 	// will eventually hold assembly surfaces (inert)
  architecture: null, 	// will eventually hold architecture surfaces (inert)
  operational: null, 	// will eventually hold operational surfaces (inert)
  system: null	 	// will eventually hold system surfaces (inert)
};