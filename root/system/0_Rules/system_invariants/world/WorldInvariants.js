// Constraints for a valid WorldProtocol instance.
// No shape, no behavior, no semantics.

export function validateWorld(world) {
  if (!world) throw new Error("World is required");
  if (!world.kind !== "World") throw new Error("Invalid kind for World");
  if (!world.id) throw new Error("World.id is required");
  if (!world.name) throw new Error("World.name is required");
}