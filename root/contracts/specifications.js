// Specification Map (inert)
// Holds inert specifications for each architectural layer.

export const Specifications = {
  root: {
    specifies: [
      "Inert specification of system-level expectations",
      "Inert high-level constraints for the overall architecture"
    ],
    notes: [
      "Root specifications define only structural expectations",
      "Root specifications do not define behavior, wiring, or logic",
      "Root specifications remain inert and reversible"
    ]
  },

  system: {
    specifies: [
      "Inert specification of operational-layer expectations",
      "Inert constraints describing system-level structural requirements"
    ],
    notes: [
      "System specifications define only structural expectations",
      "System specifications do not define behavior, wiring, or logic",
      "System specifications remain inert and reversible"
    ]
  },

  operational: {
    specifies: [
      "Inert specification of engine-layer expectations",
      "Inert constraints describing system-level structural requirements"
    ],
    notes: [
      "Operational specifications define only structural expectations",
      "Operational specifications do not define behavior, wiring, or logic",
      "Operational specifications remain inert and reversible"
    ]
  },

  engine: {
    specifies: [
      "Inert specification of world-layer expectations",
      "Inert constraints describing engine-level structural requirements"
    ],
    notes: [
      "Engine specifications define only structural expectations",
      "Engine specifications do not define behavior, wiring, or logic",
      "Engine specifications remain inert and reversible"
    ]
  },

  world: {
    specifies: [
      "Inert specification of assembly-layer expectations",
      "Inert constraints describing world-level structural requirements"
    ],
    notes: [
      "World specifications define only structural expectations",
      "World specifications do not define behavior, wiring, or logic",
      "World specifications remain inert and reversible"
    ]
  },

  assembly: {
    specifies: [
      "Inert specification of architecture-layer expectations",
      "Inert constraints describing assembly-level structural requirements"
    ],
    notes: [
      "Assembly specifications define only structural expectations",
      "Assembly specifications do not define behavior, wiring, or logic",
      "Assembly specifications remain inert and reversible"
    ]
  },

  architecture: {
    specifies: [
      "Inert foundational architecture structural expectations",
      "Inert constraints describing base-level structural requirements"
    ],
    notes: [
      "Architecture specifications define only structural expectations",
      "Architecture specifications do not define behavior, wiring, or logic",
      "Architecture specifications remain inert and reversible"
    ]
  },
};