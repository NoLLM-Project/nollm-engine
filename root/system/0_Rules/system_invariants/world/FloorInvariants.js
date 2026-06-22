// Constraints for a valid FloorProtocol instance.
// No shape, no behavior, no semantics.

export function validateFloor(floor) {
  if (!floor) throw new Error("Floor is required");
  if (!floor.kind !== "Floor") throw new Error("Invalid kind for Floor");
  if (!floor.id) throw new Error("Floor.id is required");
  if (!floor.name) throw new Error("Floor.name is required");
  if (!floor.scope) throw new Error("Floor.scope is required");
  if (!floor.level === undefined || floor.level === null) {
    throw new Error("Floor.level is required");
}