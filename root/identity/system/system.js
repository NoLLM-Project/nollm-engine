// System (inert)
// Outward-facing inert system container.

export const System = {
  system: null,		// will eventually hold system_surface (inert)
  runtime: null,	// will eventually hold system_runtime (inert)
  assembly: null,	// will eventually hold assembly_runtime (inert)
  world: null,	 	// will eventually hold world_runtime (inert)
  engine: null, 	// will eventually hold engine_runtime (inert)
  operational: null, 	// will eventually hold operational_runtime (inert)
  architecture: null	// will eventually hold architecture_system_surface (inert)
};

// Inert outward exposure of the system surface
export * from "/../../surfaces/system/system_surface.js";