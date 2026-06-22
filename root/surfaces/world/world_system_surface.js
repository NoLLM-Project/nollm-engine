// World System Surface (inert)
// Outward-facing structure for the world system layer.

import { WorldSystem } from "./world_system.js";

export const WorldSystemSurface = {
  world: WorldSystem, 	// inert reference back to the world system
  assembly: null, 	// will eventually hold assembly surfaces (inert)
  architecture: null, 	// will eventually hold architecture surfaces (inert)
  engine: null,	 	// will eventually hold engine surfaces (inert)
  operational: null, 	// will eventually hold operational surfaces (inert)
  system: null 		// will eventually hold system surfaces (inert)
};