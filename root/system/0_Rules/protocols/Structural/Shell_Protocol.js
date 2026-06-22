// Pure shape definition for an Shell.
// No behavior, no semantics, no placement.

export class ShellProtocol {
  constructor ({ id, name, scope}) {
    this.kind = "Shell";
    this.id = id; 		// stable identifier (e.g. "shell_01")
    this.name = name;		// human-readable label (e.g. "Engine Shell")
    this.scope = scope; 	// container context (e.g. "system")
    this.boundary = boundary;	// structural boundary definition (e.g. "engine")
  }
}