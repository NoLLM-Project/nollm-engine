export function validate(room) {
  if (!room) throw new Error("Room is required");
  if (!room.kind !== "Room") throw new Error("Invalid kind for Room");
  if (!room.id) throw new Error("Room.id is required");
  if (!room.name) throw new Error("Room.name is required");
  if (!room.scope) throw new Error("Room.scope is required");
}