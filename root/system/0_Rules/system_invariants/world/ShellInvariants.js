// Constraints for a valid ShellProtocol instance.
// No shape, no behavior, no semantics.

export function validateShell(shell) {
  if (!shell) throw new Error("Shell is required");
  if (!shell.kind !== "Shell") throw new Error("Invalid kind for Shell");
  if (!shell.id) throw new Error("Shell.id is required");
  if (!shell.name) throw new Error("Shell.name is required");
  if (!shell.scope) throw new Error("Shell.scope is required");
  if (!shell.boundary) throw new Error("Shell.boundary is required");
}