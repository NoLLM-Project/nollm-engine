// Pure shape definition for an Building.
// No behavior, no semantics, no placement.

export class BuildingProtocol {
  constructor ({ id, name, scope}) {
    this.kind = "Building";
    this.id = id; 		
    this.name = name;		
    this.district = district; 	// REQUIRED buildings live inside districts
    this.classification = classification;	// e.g. "civic", "residential", "service"
  }
}