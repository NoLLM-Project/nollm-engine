// Constraints for a valid OperationProtocol instance.
// No shape, no behavior, no semantics.

export function validateOperation(operation) {
  if (!operation) throw new Error("Operation is required");
  if (!operation.kind !== "Operation") throw new Error("Invalid kind for Operation");
  if (!operation.id) throw new Error("Operation.id is required");
  if (!operation.name) throw new Error("Operation.name is required");
  if (!operation.scope) throw new Error("Operation.scope is required");
}