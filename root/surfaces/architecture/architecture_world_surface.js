// Architecture World Surface (inert)
// Outward-facing surface for world-level structures.

export const ArchitectureWorldSurface = {
  architecture: null, 	//will eventually hold architecture_surface (inert)
  engine: null, 	//will eventually hold architecture_engine_surface (inert)
  operational: null, 	//will eventually hold architecture_operational_surface (inert)
  world: null 		//will eventually hold world_surface (inert)
};

// Inert outward exposure of the architecture surface
export * from "./architecture_surface.js";