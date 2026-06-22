// System Runtime (inert)
// Holds the runtime-level system state and references.

export const SystemRuntime = {
  system: null,		// will eventually hold system runtime state (inert)
  assembly: null,	// will eventually hold assembly_runtime_surface (inert)
  world: null,	 	// will eventually hold world_runtime_surface (inert)
  engine: null, 	// will eventually hold engine_runtime_surface (inert)
  operational: null, 	// will eventually hold operational_runtime_surface (inert)
  architecture: null	// will eventually hold architecture_system_surface (inert)
};

// Inert outward exposure of the system runtime surface
export * from "./system_runtime_surface.js";