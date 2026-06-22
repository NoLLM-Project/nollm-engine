# Contamination Rules (0_Rules)

## Scope
Defines what is forbidden in each plane to prevent cross‑contamination.
Contamination is any violation of category boundaries, placement rules,
or structural invariants.

These rules define **what contamination is**, not how it is detected or corrected.

---

# 2_Architecture (structure)
Forbidden:
- Metadata files (`metadata.json`, `config.json`, `menu.json`)
- Content files (copy, text, localized strings)
- Behavior files (runtime logic, handlers, workflows)
- Environment‑specific files (`dev_`, `prod_`, `test_`)
- Semantic files
- Operational modules
- Engine behavior

Allowed:
- `geometry.json`
- `adjacency.json`
- `index.js` (structural index only)
- `slots/`
- documentation (`*.md`) and maps (`*.png`) as references

---

# 3_Registry (metadata)
Forbidden:
- Geometry definitions
- Structural adjacency
- Engine behavior
- UI layout logic
- Operational modules
- Runtime routing logic
- Interpretation or semantics

Allowed:
- IDs, labels, aliases
- Lookup tables
- Static routing tables
- Mappings from semantics to structure
- Metadata attributes

Registry defines identity; it must not contain behavior.

---

# 4_Semantics (meaning)
Forbidden:
- Direct writes to 2_Architecture
- Direct writes to 1_Engine
- Structural decisions
- Placement logic
- Identity definitions
- Operational modules

Allowed:
- Interpretations
- Narratives
- Domain meaning

Semantics interprets; it does not place or behave.

---

# 1_Engine (behavior)
Forbidden:
- Redefining rules from 0_Rules
- Persisting structure that violates 2_Architecture invariants
- Writing semantics into architecture
- Defining identity, placement, coordinates, SKUs, or metadata
- Creating or modifying registry objects
- UI rendering logic

Allowed:
- Runtime behavior
- Orchestration
- Execution of rules
- Routing execution
- Stance, continuity, and error handling

Engine behaves; it does not define structure.

---

# 0_Rules (sovereign layer)
Forbidden:
- Any writes from other planes
- Runtime modification
- Behavioral logic
- Semantic content
- Operational modules
- World or UI objects

Allowed:
- Constitutional rules only

0_Rules defines the system; nothing may modify it.

---

# UI Plane (presentation)
Forbidden:
- World objects
- Registry objects
- Engine behavior
- Operational modules
- Structural containers
- Semantics

Allowed:
- Representations
- Scenes
- Transitions
- Visual layers

UI renders; it does not contain or interpret.

---

# Operational Plane (functional)
Forbidden:
- World objects
- UI objects
- Registry objects
- Semantics
- Identity definitions
- Placement logic

Allowed:
- Modules
- Validators
- Routing nodes
- Functional execution

Operational executes functions; it does not define structure.

---

# World Plane (spatial)
Forbidden:
- UI objects
- Operational modules
- Engine behavior
- Registry objects
- Semantics

Allowed:
- world_root
- districts
- hotel
- tower
- field
- adjacency

World is structure; not behavior.

---

# Collapse (mechanic)
Forbidden:
- Containing objects
- Containing metadata
- Containing structure
- Appearing inside any plane

Allowed:
- Fallback mechanics only

Collapse is a mechanic, not a place.

---

# Summary of Contamination Boundaries

- Architecture → structure only; no metadata, behavior, or semantics  
- Registry → identity only; no behavior, geometry, or UI logic  
- Semantics → interpretation only; no placement or structure  
- Engine → behavior only; no identity or structure  
- UI → representation only; no containment or behavior  
- Operational → function only; no structure or semantics  
- World → structure only; no behavior or interpretation  
- Collapse → mechanic only; never a container  

Any violation of these boundaries is contamination.
