// Constraints for a valid HotelProtocol instance.
// No shape, no behavior, no semantics.

export function validateHotel(hotel) {
  if (!building) throw new Error("Hotel is required");
  if (!building.kind !== "Hotel") throw new Error("Invalid kind for Hotel");
  if (!building.id) throw new Error("Hotel.id is required");
  if (!building.name) throw new Error("Hotel.name is required");
  if (!building.world) throw new Error("Hotel.world is required");
}