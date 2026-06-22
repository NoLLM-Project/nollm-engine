// Orientation Map (inert)
// Holds inert orientation descriptors for each layer.

export const Orientation = {
  architecture: {
    role: "Architecture-level container",
    scope: "Holds inert references to architecture surfaces and definitions",
    boundaries: {
      above: ["assembly"],
      below: [],
      lateral: []
    },
    notes: [
      "Does not define runtime behavior",
      "Does not enforce constraints or validation",
      "Does not activate or wire anything",
      "Provides the foundational structural layer beneath all others"
    ]
  },

  assembly: {
    role: "Assembly-level container",
    scope: "Holds inert references to architecture systems",
    boundaries: {
      above: ["world"],
      below: ["architecture"],
      lateral: []
    },
    notes: [
      "Does not assemble or construct runtime objects",
      "Does not coordinate architecture behavior",
      "Does not activate or wire anything",
      "Provides structural grouping beneath the engine layer"
    ]
  },

  world: {
    role: "World-level container",
    scope: "Holds inert references to assembly, and architecture systems",
    boundaries: {
      above: ["engine"],
      below: ["assembly", "architecture"],
      lateral: []
    },
    notes: [
      "Does not simulate or update world state",
      "Does not coordinate assembly or architecture behavior",
      "Does not activate or wire anything",
      "Provides structural grouping beneath the engine layer"
    ]
  },

  engine: {
    role: "Engine-level container",
    scope: "Holds inert references to world, assembly, and architecture systems",
    boundaries: {
      above: ["operational"],
      below: ["world", "assembly", "architecture"],
      lateral: []
    },
    notes: [
      "Does not execute engine logic",
      "Does not coordinate world or assembly behavior",
      "Does not activate or wire anything",
      "Provides structural grouping beneath the operational layer"
    ]
  },

  operational: { 
    role: "Operational-level container",
    scope: "Holds inert references to engine, world, assembly, and architecture systems",
    boundaries: {
      above: ["system"],
      below: ["engine", "world", "assembly", "architecture"],
      lateral: []
    },
    notes: [
      "Does not coordinate or schedule operations",
      "Does not perform computation",
      "Does not activate or wire anything",
      "Provides structural grouping beneath the system layer"
    ]
  },

  system: {
    role: "System-level container",
    scope: "Holds inert references to operational, engine, world, assembly, and architecture systems",
    boundaries: {
      above: ["root"],
      below: ["operational", "engine", "world", "assembly", "architecture"],
      lateral: []
    },
    notes: [
      "Does not coordinate layers",
      "Does not perform computation",
      "Does not activate or wire anything",
      "Provides structural grouping beneath the root"
    ]
  },

  root: {
    role: "Top-level container",
    scope: "Holds inert references to all system-level objects",
    boundaries: {
      above: null,
      below: ["system", "operational", "engine", "world", "assembly", "architecture"],
      lateral: []
    },
    notes: [
      "Does not perform computation",
      "Does not coordinate layers",
      "Does not activate or wire anything",
      "Serves only as a structural anchor"
    ]
  }
}; 