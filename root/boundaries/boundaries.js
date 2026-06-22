// Boundary Map (inert)
// Holds inert boundary declarations for each layer.

export const Boundaries = {
  root: {
    prohibits: {
      upward: ["No layer exists above root"],
      downward: [
        "No behavior may originate at root",
        "No activation may originate at root",
        "No cooridination may originate at root",
        "No runtime logic may pass downward from root"
      ],
      lateral: [
        "Root may not directly reference sibling layers (it has none)",
        "Root may not introduce cross-layer coupling"
      ]
    },
    allows: [
      "Holding inert references to system-level objects",
      "Serving as a structural anchor only"
    ],
    notes: [
      "Root must remain passive and inert",
      "Root cannot initiate computation or coordination",
      "Root cannot enforce constraints or validation"
    ]
  },

  system: {
    prohibits: {
      upward: [
        "System layer may not push behavior or activation upward to root",
        "System layer may not coordinate or schedule root-level activity",
        "System layer may not introduce runtime logic above itself"
      ],
      downward: [
        "System layer may not inject behavior into operational, engine, world, assembly, or architecture layers",
        "System layer may not enforce constraints or validation on lower layers",
        "System layer may not initiate computation or activation",
      ],
      lateral: [
        "System layer may not create cross-layer coupling",
        "System layer may not reference sibling layers except through inert structures"
      ]
    },
    allows: [
      "Holding inert references to operational, engine, world, assembly, and architecture systems",
      "Serving as a structural grouping beneath the root"
    ],
    notes: [
      "System layer must remain passive and inert",
      "System layer cannot initiate or coordinate behavior",
      "System layer cannot enforce rules or constraints"
    ]
  },

  operational: {
    prohibits: {
      upward: [
        "Operational layer may not push behavior or activation upward to the system layer",
        "Operational layer may not coordinate or schedule system-level activity",
        "Operational layer may not introduce runtime logic above itself"
      ],
      downward: [
        "Operational layer may not inject behavior into engine, world, assembly, or architecture layers",
        "Operational layer may not enforce constrains or validation or lower layers",
        "Operational layer may not initiate computation or activation",
      ],
      lateral: [
        "Operational layer may not create cross-layer coupling",
        "Operational layer may not reference sibling layers except through inert structures"
      ]
    },
    allows: [
      "Holding inert references to engine, world, assembly, and architecture systems",
      "Serving as a structural grouping beneath the system layer"
    ],
    notes: [
      "Operational layer must remain passive and inert",
      "Operational layer cannot initiate or coordinate behavior",
      "Operational layer cannot enforce rules or constraints"
    ]
  },

  engine: {
    prohibits: {
      upward: [
        "Engine layer may not push behavior or activation upward to the operational layer",
        "Engine layer may not coordinate or schedule operational-level activity",
        "Engine layer may not introduce runtime logic above itself"
      ],
      downward: [
        "Engine layer may not inject behavior into world, assembly, or architecture layers",
        "Engine layer may not enforce constraints or validation on lower layers",
        "Engine layer may not initiate computation or activation",
      ],
      lateral: [
        "Engine layer may not create cross-layer coupling",
        "Engine layer may not reference sibling layers except through inert structures"
      ]
    },
    allows: [
      "Holding inert references to world, assembly, and architecture systems",
      "Serving as a structural grouping beneath the operational layer"
    ],
    notes: [
      "Engine layer must remain passive and inert",
      "Engine layer cannot initiate or coordinate behavior",
      "Engine layer cannot enforce rules or constraints"
    ]
  },

  world: {
    prohibits: {
      upward: [
        "World layer may not push behavior or activation upward to the engine layer",
        "World layer may not coordinate or schedule engine-level activity",
        "World layer may not introduce runtime logic above itself"
      ],
      downward: [
        "World layer may not inject behavior into assembly, or architecture layers",
        "World layer may not enforce constraints or validation on lower layers",
        "World layer may not initiate computation or activation",
      ],
      lateral: [
        "World layer may not create cross-layer coupling",
        "World layer may not reference sibling layers except through inert structures"
      ]
    },
    allows: [
      "Holding inert references to assembly, and architecture systems",
      "Serving as a structural grouping beneath the engine layer"
    ],
    notes: [
      "World layer must remain passive and inert",
      "World layer cannot initiate or coordinate behavior",
      "World layer cannot enforce rules or constraints"
    ]
  },

  assembly: {
    prohibits: {
      upward: [
        "Assembly layer may not push behavior or activation upward to the world layer",
        "Assembly layer may not coordinate or schedule world-level activity",
        "Assembly layer may not introduce runtime logic above itself"
      ],
      downward: [
        "Assembly layer may not inject behavior into the architecture layer",
        "Assembly layer may not enforce constraints or validation on lower layers",
        "Assembly layer may not initiate computation or activation",
      ],
      lateral: [
        "Assembly layer may not create cross-layer coupling",
        "Assembly layer may not reference sibling layers except through inert structures"
      ]
    },
    allows: [
      "Holding inert references to assembly, and architecture systems",
      "Serving as a structural grouping beneath the world layer"
    ],
    notes: [
      "Assembly layer must remain passive and inert",
      "Assembly layer cannot initiate or coordinate behavior",
      "Assembly layer cannot enforce rules or constraints"
    ]
  },

  architecture: {
    prohibits: {
      upward: [
        "Architecture layer may not push behavior or activation upward to the assembly layer",
        "Architecture layer may not coordinate or schedule assembly-level activity",
        "Architecture layer may not introduce runtime logic above itself"
      ],
      downward: [
        "No layer exists below architecture; nothing may be pushed downward"
      ],
      lateral: [
        "Architecture layer may not create cross-layer coupling",
        "Architecture layer may not reference sibling layers except through inert structures"
      ]
    },
    allows: [
      "Holding inert references to architecture surfaces and definitions",
      "Serving as a foundational structural layer"
    ],
    notes: [
      "Architecture layer must remain passive and inert",
      "Architecture layer cannot initiate or coordinate behavior",
      "Architecture layer cannot enforce rules or constraints"
    ]
  },

};