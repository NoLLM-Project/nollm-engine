// System Runtime Surface (inert)
// Outward-facing runtime structure for the system layer.

export const SystemRuntimeSurface = {
  architecture: null,	// will eventually hold architecture_system_surface (inert)
  assembly: null,	// will eventually hold assembly_runtime_surface (inert)
  world: null,	 	// will eventually hold world_runtime_surface (inert)
  engine: null, 	// will eventually hold engine_runtime_surface (inert)
  operational: null, 	// will eventually hold operational_runtime_surface (inert)
  system: null		// will eventually hold system runtime state (inert)
};

// Inert outward exposure of the architecture system surface
export * from "./architecture_system_surface.js";

