// Engine System  Surface (inert)
// Outward-facing structure for the engine system layer.

import { EngineSystem } from "./engine_system.js";

export const EngineSystemSurface = {
  engine: EngineSystem, // inert reference back to the engine system
  world: null, 		// will eventually hold world surfaces (inert)
  assembly: null, 	// will eventually hold assembly surfaces (inert)
  architecture: null, 	// will eventually hold architecture surfaces (inert)
  operational: null, 	// will eventually hold operational surfaces (inert)
  system: null	 	// will eventually hold system surfaces (inert)
};