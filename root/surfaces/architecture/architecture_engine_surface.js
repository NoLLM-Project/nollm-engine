// Architecture Engine Surface (inert)
// Outward-facing surface for engine-level structures.

export const ArchitectureEngineSurface = {
  architecture: null, 	// will eventually hold architecture_surface (inert)
  world: null, 		// will eventually hold architecture_world_surface (inert)
  operational: null, 	// will eventually hold architecture_operational_surface (inert)
  engine: null, 	// will eventually hold engine_surface (inert)
};

// Inert outward exposure of the architecture surface
export * from "./architecture_surface.js";