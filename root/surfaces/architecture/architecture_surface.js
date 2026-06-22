// Architecture Surface (inert)
// Outward-facing surface for architecture-level structures.

export const ArchitectureSurface = {
  registry: null, 	// will eventually hold architecture_registry_surface (inert)
  assembly: null, 	// will eventually hold architecture_assembly_surface (inert)
  world: null, 		// will eventually hold world architecture surface (inert)
  engine: null, 	// will eventually hold engine architecture surface (inert)
  operational: null, 	// will eventually hold operational architecture surface (inert)
};

// Inert outward exposure of the architecture registry surface
export * from "./architecture_registry_surface.js";

// Inert outward exposure of the architecture assembly surface
export * from "./architecture_assembly_surface.js";