// Pure shape definition for an Operation.
// No behavior, no semantics, no placement.

export class OperationProtocol {
  constructor ({ id, name, scope}) {
    this.kind = "Operation";
    this.id = id; 		// stable identifier (e.g. "op_drift_detector_A")
    this.name = name;		// human-readable label
    this.scope = scope; 	// where this operation is allowed to exist (e.g. "engine.drift")
  }
}