// World Surface (inert)
// Outward-facing surface for world-level runtime structures.

export const WorldSurface = {
  architecture: null, 	// will eventually hold architecture_world_surface (inert)
  engine: null,	 	// will eventually hold engine_surface (inert)
  operational: null, 	// will eventually hold operational_surface (inert)
  world: null 		// will eventually hold world_runtime_surface (inert)
};

// Inert outward exposure of the architecture world surface
export * from "./architecture_world_surface.js";