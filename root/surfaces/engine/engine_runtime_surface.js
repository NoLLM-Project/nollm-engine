// Engine Runtime Surface (inert)
// Outward-facing runtime structure for the engine subsystem.

export const EngineRuntimeSurface = {
  engine: null, 	// will eventually hold engine runtime state (inert)
  world: null,	 	// will eventually hold world runtime surface (inert)
  operational: null, 	// will eventually hold operational runtime surface (inert)
  architecture: null	// will eventually hold architecture_engine_surface (inert)
};

// Inert outward exposure of the architecture engine surface
export * from "./architecture_engine_surface.js";