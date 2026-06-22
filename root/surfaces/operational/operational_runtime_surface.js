// Operational Runtime Surface (inert)
// Outward-facing runtime structure for the operational subsystem.

export const OperationalRuntimeSurface = {
  operational: null, 	// will eventually hold operational runtime state (inert)
  world: null,	 	// will eventually hold world runtime surface (inert)
  engine: null, 	// will eventually hold engine runtime surface (inert)
  architecture: null	// will eventually hold architecture_operational_surface (inert)
};

// Inert outward exposure of the architecture operational surface
export * from "./architecture_operational_surface.js";