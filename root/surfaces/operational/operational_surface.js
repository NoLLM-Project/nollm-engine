// Operational Surface (inert)
// Outward-facing surface for operational-level runtime structures.

export const OperationalSurface = {
  architecture: null, 	// will eventually hold architecture_operational_surface (inert)
  world: null,	 	// will eventually hold world_surface (inert)
  engine: null, 	// will eventually hold engine_surface (inert)
  operational: null 	// will eventually hold operational_runtime_surface (inert)
};

// Inert outward exposure of the architecture operational surface
export * from "./architecture_operational_surface.js";