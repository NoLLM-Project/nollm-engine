// Pure shape definition for the Hotel.
// World-level, singular, sovereign container
// No behavior, no semantics, no placement.

export class HotelProtocol {
  constructor ({ id, name, world}) {
    this.kind = "Hotel";
    this.id = id; 		
    this.name = name;		
    this.world = world; 	// REQUIRED: hotel lives directly in the world
  }
}