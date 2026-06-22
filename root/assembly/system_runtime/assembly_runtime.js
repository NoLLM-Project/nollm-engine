// Assembly Runtime (inert)
// Holds the runtime-level assembly state and references.

export const AssemblyRuntime = {
  assembly: null,	// will eventually hold assembly runtime state (inert)
  world: null,	 	// will eventually hold world runtime state (inert)
  engine: null, 	// will eventually hold engine runtime surface (inert)
  operational: null, 	// will eventually hold operational runtime surface (inert)
  architecture: null	// will eventually hold architecture_assembly_surface (inert)
};

// Inert outward exposure of the assembly runtime surface
export * from "./assembly_runtime_surface.js";
