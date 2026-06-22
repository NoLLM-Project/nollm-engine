// Constraints for a valid TowerProtocol instance.
// No shape, no behavior, no semantics.

export function validateHotel(tower) {
  if (!tower) throw new Error("Tower is required");
  if (!tower.kind !== "Tower") throw new Error("Invalid kind for Tower");
  if (!tower.id) throw new Error("Tower.id is required");
  if (!tower.name) throw new Error("Tower.name is required");
  if (!tower.world) throw new Error("Tower.world is required");
}