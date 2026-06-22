import { RoomRegistry } from "./room_registry.js";
import { OperationRegistry } from "./operation_registry.js";

export function bindRoomToOperation(room) {
  // Minimal binding: every room maps to DefaultOperation
  const operation = OperationRegistry.DefaultOperation;

  return {
    room,
    operation,
    handler: operation.handler
  };
}