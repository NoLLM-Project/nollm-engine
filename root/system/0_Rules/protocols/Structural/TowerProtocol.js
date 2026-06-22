// Pure shape definition for the Tower.
// World-level, singular, sovereign container
// No behavior, no semantics, no placement.

export class TowerProtocol {
  constructor ({ id, name, world}) {
    this.kind = "Tower";
    this.id = id; 		// stable identifier (e.g. "tower_main")	
    this.name = name;		// human-readable label (e.g. "C_Tower")
    this.world = world; 	// REQUIRED: tower lives directly in the world
  }
}