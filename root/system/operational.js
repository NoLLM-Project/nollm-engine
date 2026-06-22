// Operational Architecture Surface Bundle (inert)
// Exposes the operational root, identity, and modules surfaces.

export * from "./index.js"; 	// root surface
export { default as identity } from "./identity.js";  // identity surface
export * from "./modules.js"; 	// modules surface
export * as RegistrySubsystem from "./3_Registry/index.js";
export * from "./registry_instance.js";
export * from "./registry_integrator.js";
export * from "./registry_assembly.js";
export * from "./registry_assembly_index.js";
export * from "../registry_system.js";