# District Door Invariants (0_Rules / invariants_rules / System)

## Scope
These invariants define the system‑level constraints for the District Door.
The District Door is a world‑plane transition object, not structure, identity,
placement, geometry, semantics, or behavior.

These invariants define **what the District Door is**, not how it is implemented.

---

## Core Principles

### 1. The District Door is a world‑plane transition object
The District Door represents:
- a transition boundary between a district and its district‑level scene
- a world‑plane entry/exit point
- a structural adjacency boundary (conceptual, not geometric)

The District Door does **not** represent:
- geometry
- placement
- identity
- routing
- behavior
- semantics
- UI transitions

---

### 2. The District Door is non‑structural
The District Door must not appear in:
- geometry.json
- adjacency.json
- index.js
- slots/
- any structural container

The District Door cannot define or alter structure.

---

### 3. The District Door is non‑behavioral
The District Door cannot encode:
- triggers
- conditions
- logic flows
- state machines
- workflows
- operational modules

The District Door is not a behavior engine.

---

### 4. The District Door is non‑semantic
The District Door cannot encode:
- labels
- copy
- narrative meaning
- UI text
- content

The District Door is not a semantic layer.

---

### 5. The District Door is non‑UI
The District Door cannot encode:
- UI transitions
- UI scenes
- UI animations
- UI edges

UI-plane may interpret District Door transitions but may not define or alter them.

---

### 6. The District Door is non‑operational
The District Door cannot encode:
- service logic
- concierge logic
- operational flows
- business rules

Operational-plane may use District Door transitions but may not define or alter them.

---

### 7. The District Door is immutable at runtime
The engine may read District Door definitions but may not:
- modify them
- generate new District Doors
- delete District Doors
- reinterpret District Doors as behavior or structure

District Door definitions are static and defined only in 2_Architecture.

---

## Cross‑Plane Rules

- 2_Architecture **defines** the District Door.
- 1_Engine **reads** District Door definitions but may not modify them.
- 3_Registry may **reference** District Door definitions but may not define or alter them.
- 4_Semantics may **interpret** District Door transitions but may not alter or extend them.
- UI-plane may **render** District Door transitions but may not contain or modify them.
- Operational-plane may **use** District Door transitions but may not define or contain them.
- Only 0_Rules defines what the District Door *is*.

These rules ensure the District Door remains a world‑plane transition object and nothing else.

---

## Drift Conditions

District Door drift occurs when:
- District Door definitions appear in structural files
- District Door encodes behavior or logic
- District Door encodes semantics or UI
- District Door encodes operational flows
- District Door is redefined outside 2_Architecture
- District Door is interpreted as structure or placement
- District Door is missing from a container that requires it

All District Door drift must be corrected explicitly.
