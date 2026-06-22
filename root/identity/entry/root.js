// Root (inert)
// Outward-facing inert container for the entire NoLLM system.

import { ArchitectureSystem } from "./architecture_system.js";
import { AssemblySystem } from "./assembly_system.js";
import { WorldSystem } from "./world_system.js";
import { EngineSystem } from "./engine_system.js";
import { OperationalSystem } from "./operational_system.js";
import { SystmeSystem } from "./system_system.js";

export const Root = {
  architecture: ArchitectureSystem,
  assembly: AssemblySystem,
  world: WorldSystem,	
  engine: EngineSystem, 
  operational: OperationalSystem, 
  system: SystemSystem,	
};