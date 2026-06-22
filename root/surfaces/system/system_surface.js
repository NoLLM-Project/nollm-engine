// System Surface (inert)
// Outward-facing structure for the system layer.

export const SystemSurface = {
  system: null,		// will eventually hold system runtime (inert)
  assembly: null,	// will eventually hold assembly_runtime (inert)
  world: null,	 	// will eventually hold world_runtime (inert)
  engine: null, 	// will eventually hold engine_runtime (inert)
  operational: null, 	// will eventually hold operational_runtime (inert)
  architecture: null	// will eventually hold architecture_system_surface (inert)
};

// Inert outward exposure of the system runtime
export * from "./system_runtime.js";