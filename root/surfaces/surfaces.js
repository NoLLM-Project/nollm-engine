// Surface Map (inert)
// Holds inert surface declarations for each layer.

export const Surfaces = {
  root: {
    exposes: [
      "Inert references to system-level structures",
      "High-level structural view of all layers"
    ],
    hides: [
      "All runtime behavior"
      "All activation and coordination details",
      "All implementation details of lower layers"
    ],
    notes: [
      "Root surface is purely structural and descriptive",
      "Root does not define or expose any executable interfaces",
      "Root only reveals that a layered architecture exists beneath it"
    ]
  },

  system: {
    exposes: [
      "Inert references to operational, engine, world, assembly, and architecture structures",
      "A High-level structural view of all layers beneath system"
    ],
    hides: [
      "All runtime behavior and activation details"
      "All coordination or scheduling mechanisms",
      "All implementation details of lower layers"
    ],
    notes: [
      "System surface is purely structural and descriptive",
      "System does not define or expose any executable interfaces",
      "System only reveals the existence and arrangement of lower layers"
    ]
  },

  operational: {
    exposes: [
      "Inert references to engine, world, assembly, and architecture structures",
      "A mid-level structural view of layers beneath operational"
    ],
    hides: [
      "All runtime behavior and activation details"
      "All coordination or scheduling mechanisms",
      "All implementation details of lower layers"
    ],
    notes: [
      "Operational surface is purely structural and descriptive",
      "Operational layer does not define or expose any executable interfaces",
      "Operational surface only reveals the existence and arrangement of lower layers"
    ]
  },

  engine: {
    exposes: [
      "Inert references to world, assembly, and architecture structures",
      "A structural view of layers directly beneath engine"
    ],
    hides: [
      "All runtime behavior and activation details"
      "All coordination or scheduling mechanisms",
      "All implementation details of lower layers"
    ],
    notes: [
      "Engine surface is purely structural and descriptive",
      "Engine does not define or expose any executable interfaces",
      "Engine surface only reveals the existence and arrangement of lower layers"
    ]
  },

  world: {
    exposes: [
      "Inert references to assembly, and architecture structures",
      "A structural view of layers directly beneath world"
    ],
    hides: [
      "All runtime behavior and activation details"
      "All coordination or scheduling mechanisms",
      "All implementation details of lower layers"
    ],
    notes: [
      "World surface is purely structural and descriptive",
      "World does not define or expose any executable interfaces",
      "World surface only reveals the existence and arrangement of lower layers"
    ]
  },

  assembly: {
    exposes: [
      "Inert references to architecture structures",
      "A structural view of the foundational layer beneath assembly"
    ],
    hides: [
      "All runtime behavior and activation details"
      "All coordination or scheduling mechanisms",
      "All implementation details of the architecture layer"
    ],
    notes: [
      "Assembly surface is purely structural and descriptive",
      "Assembly does not define or expose any executable interfaces",
      "Assembly surface only reveals the existence and arrangement of the architecture layer"
    ]
  },

  architecture: {
    exposes: [
      "Inert references to architecture definitions and surfaces",
      "The foundational structural elements of the system"
    ],
    hides: [
      "All runtime behavior and activation details"
      "All coordination or scheduling mechanisms",
      "All implementation details of any internal architectural constructs"
    ],
    notes: [
      "Architecture surface is purely structural and descriptive",
      "Architecture does not define or expose any executable interfaces",
      "Architecture surface only reveals the existence of foundational structures"
    ]
  },
};