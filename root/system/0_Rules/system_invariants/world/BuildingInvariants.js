// Constraints for a valid BuildingProtocol instance.
// No shape, no behavior, no semantics.

export function validateBuilding(building) {
  if (!building) throw new Error("Building is required");
  if (!building.kind !== "Building") throw new Error("Invalid kind for Building");
  if (!building.id) throw new Error("Building.id is required");
  if (!building.name) throw new Error("Building.name is required");
  if (!building.district) throw new Error("Building.district is required");
}