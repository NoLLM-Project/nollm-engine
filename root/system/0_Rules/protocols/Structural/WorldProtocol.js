// Pure shape definition for an World.
// No behavior, no semantics, no placement.

export class WorldProtocol {
  constructor ({ id, name }) {
    this.kind = "World";
    this.id = id; 		// stable identifier (e.g. "world_main")		
    this.name = name;		// human-readable lable (e.g. "A_World")	
  }
}