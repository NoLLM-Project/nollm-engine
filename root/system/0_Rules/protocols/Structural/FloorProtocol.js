// Pure shape definition for an Floor.
// No behavior, no semantics, no placement.

export class FloorProtocol {
  constructor ({ id, name, scope}) {
    this.kind = "Floor";
    this.id = id; 		// stable identifier (e.g. "floor_01")
    this.name = name;		// human-readable label (e.g. "Floor 01")
    this.scope = scope; 	// container context (e.g. "hotel")
    this.level = level;		// numeric or ordered level (e.g. 1)
  }
}