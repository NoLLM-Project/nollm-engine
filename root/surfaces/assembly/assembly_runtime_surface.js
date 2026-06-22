// Assembly Runtime Surface (inert)
// Outward-facing runtime structure for the assembly layer.

export const AssemblyRuntimeSurface = {
  architecture: null,	// will eventually hold architecture_assembly_surface (inert)
  engine: null, 	// will eventually hold engine_runtime_surface (inert)
  world: null,	 	// will eventually hold world_runtime_surface (inert)
  operational: null, 	// will eventually hold operational_runtime_surface (inert)
  assembly: null	// will eventually hold assembly world surface (inert)
};

// Inert outward exposure of the architecture assembly surface
export * from "./architecture_assembly_surface.js";