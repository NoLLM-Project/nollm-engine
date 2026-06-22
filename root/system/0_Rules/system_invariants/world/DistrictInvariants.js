// Constraints for a valid DistrictProtocol instance.
// No shape, no behavior, no semantics.

export function validateBuilding(district) {
  if (!district) throw new Error("District is required");
  if (!district.kind !== "District") throw new Error("Invalid kind for District");
  if (!district.id) throw new Error("District.id is required");
  if (!district.name) throw new Error("District.name is required");
  if (!district.world) throw new Error("District.world is required");
}