// Declaration Map (inert)
// Holds inert declared identities for each architectural layer.

export const Declarations = {
  root: {
    declares: [
      "Declared existence of the overall architectural root",
      "Identity marker for the top-level structural container"
    ],
    notes: [
      "Root declarations do not define behavior or wiring",
      "Root declarations remain inert and reversible",
      "Root declarations establish identity only"
    ]
  },

  system: {
    declares: [
      "Declared existence of the system layer as a structural identity",
      "Identity marker for the layer that frames operational structures"
    ],
    notes: [
      "System declarations do not define behavior or wiring",
      "System declarations remain inert and reversible",
      "System declarations establish identity only"
    ]
  },

  operational: {
    declares: [
      "Declared existence of the operational layer as a structural identity",
      "Identity marker for the layer that frames engine structures"
    ],
    notes: [
      "Operational declarations do not define behavior or wiring",
      "Operational declarations remain inert and reversible",
      "Operational declarations establish identity only"
    ]
  },

  engine: {
    declares: [
      "Declared existence of the engine layer as a structural identity",
      "Identity marker for the layer that frames world-level structures"
    ],
    notes: [
      "Engine declarations do not define behavior or wiring",
      "Engine declarations remain inert and reversible",
      "Engine declarations establish identity only"
    ]
  },

  world: {
    declares: [
      "Declared existence of the world layer as a structural identity",
      "Identity marker for the layer that frames assembly-level structures"
    ],
    notes: [
      "World declarations do not define behavior or wiring",
      "World declarations remain inert and reversible",
      "World declarations establish identity only"
    ]
  },

  assembly: {
    declares: [
      "Declared existence of the assembly layer as a structural identity",
      "Identity marker for the layer that frames architecture-level structures"
    ],
    notes: [
      "Assembly declarations do not define behavior or wiring",
      "Assembly declarations remain inert and reversible",
      "Assembly declarations establish identity only"
    ]
  },

  architecture: {
    declares: [
      "Declared existence of the architecture layer as a foundational structural identity",
      "Identity marker for the base layer that underlies all higher structures"
    ],
    notes: [
      "Architecture declarations do not define behavior or wiring",
      "Architecture declarations remain inert and reversible",
      "Architecture declarations establish identity only"
    ]
  }
};
