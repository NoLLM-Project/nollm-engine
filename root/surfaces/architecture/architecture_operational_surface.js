// Architecture Operational Surface (inert)
// Outward-facing surface for operational-level structures.

export const ArchitectureOperationalSurface = {
  architecture: null, 	// will eventually hold architecture_surface (inert)
  world: null,	 	// will eventually hold architecture_world_surface (inert)
  engine: null, 	// will eventually hold architecture_engine_surface (inert)
  operational: null 	// will eventually hold operational_surface (inert)
};

// Inert outward exposure of the architecture surface
export * from "./architecture_surface.js";