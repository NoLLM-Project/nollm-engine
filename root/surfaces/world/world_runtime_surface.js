// World Runtime Surface (inert)
// Outward-facing runtime structure for the world subsystem.

export const WorldRuntimeSurface = {
  world: null,	 	// will eventually hold world runtime state (inert)
  engine: null, 	// will eventually hold engine runtime surface (inert)
  operational: null, 	// will eventually hold operational runtime surface (inert)
  architecture: null	// will eventually hold architecture_world_surface (inert)
};

// Inert outward exposure of the architecture world surface
export * from "./architecture_world_surface.js";