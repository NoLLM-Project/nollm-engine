// Engine Surface (inert)
// Outward-facing surface for engine-level runtime structures.

export const EngineSurface = {
  architecture: null, 	// will eventually hold architecture_engine_surface (inert)
  world: null,	 	// will eventually hold world_surface (inert)
  operational: null, 	// will eventually hold operational_surface (inert)
  engine: null 		// will eventually hold engine_runtime_surface (inert)
};

// Inert outward exposure of the architecture engine surface
export * from "./architecture_engine_surface.js";
