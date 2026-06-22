// Operational System Surface (inert)
// Outward-facing structure for the operational system layer.

import { OperationalSystem} from "./operational_system.js";

export const OperationalSystemSurface = {
  operational: OperationalSystem, // inert reference back to the operational system
  engine: null, 	// will eventually hold engine surfaces (inert)
  world: null,	 	// will eventually hold world surfaces (inert)
  assembly: null, 	// will eventually hold assembly surfaces (inert)
  architecture: null, 	// will eventually hold architecture surfaces (inert)
  system: null	 	// will eventually hold system surfaces (inert)
};