// System System (inert)
// Holds the system-level surfaces.

import { SystemSystemSurface } from "../../surfaces/system/system_system_surface.js";

export const SystemSystem = {
  system: SystemSystemSurface,	 	// inert reference
  operational: null, 	// will eventually hold operational surfaces (inert)
  engine: null, 	// will eventually hold engine surfaces (inert)
  world: null,	 	// will eventually hold world surfaces (inert)
  assembly: null, 	// will eventually hold assembly surfaces (inert)
  architecture: null 	// will eventually hold architecture surfaces (inert)
};