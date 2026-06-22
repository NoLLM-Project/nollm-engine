// Architecture Assembly Surface (inert)
// Outward-facing surface for assembly-level structures.

export const ArchitectureAssemblySurface = {
  registry: null, 	// will eventually hold architecture_registry_assembly_surface (inert)
  chain: null, 		// will eventually hold architecture_registry_assembly_chain_surface (inert)
  group: null, 		// will eventually hold architecture_assembly_group_surface (inert)
  anchor: null, 	// will eventually hold architecture_assembly_anchor_surface (inert)
  container: null, 	// will eventually hold architecture_assembly_container_surface (inert)
  map: null,	 	// will eventually hold architecture_assembly_map (inert)
  domain: null, 	// will eventually hold architecture_assembly_domain (inert)
  root: null	 	// will eventually hold architecture_assembly_root (inert)
};

// Inert outward exposure of the registry assembly surface
export * from "./architecture_registry_assembly_surface.js"