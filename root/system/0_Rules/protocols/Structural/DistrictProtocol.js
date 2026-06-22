// Pure shape definition for an District.
// No behavior, no semantics, no placement.

export class DistrictProtocol {
  constructor ({ id, name, world, classification}) {
    this.kind = "District";
    this.id = id; 		
    this.name = name;		
    this.world = world; 		// REQUIRED: districts live inside the world	
    this.classification = classification;		// optional civic type
  }
}