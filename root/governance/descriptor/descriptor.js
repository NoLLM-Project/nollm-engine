// Governance Descriptor (inert)
// Describes the governance subsystem at a high level.

export const GovernanceDescriptor = {
  name: "Governance Subsystem",
  version: "0.0.1-inert",
  description: [
    "Inert descriptor for the governance subsystem.",
    "Defines the identity of the governance layer without introducing behavior.",
    "Fully reversible and non-intrusive."
  ],
  layers: [
    "root",
    "system",
    "operational",
    "engine",
    "world",
    "assembly",
    "architecture"
  ],
  notes: [
    "This descriptor does not enforce or imply any runtime behavior.",
    "It exists solely to mark the governance subsystem as a first-class component.",
    "It mirrors the descriptor pattern used in the architecture system."
  ]
};
