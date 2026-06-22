# Portal Invariants (0_Rules / invariants_rules / System)

## Scope
These invariants define the system‑level constraints for the Portal.
The Portal is a world‑plane transition mechanism between sovereign domains.
It is not structure, identity, placement, geometry, semantics, or behavior.

These invariants define **what the Portal is**, not how it is implemented.

---

## Core Principles

### 1. The Portal is a world‑plane transition mechanism
The Portal represents:
- a controlled transition between sovereign domains
- a world‑plane boundary crossing
- a conceptual adjacency, not a structural adjacency

The Portal does **not** represent:
- geometry
- placement
- identity
- routing
- behavior
- semantics
- UI transitions

---

### 2. The Portal is non‑structural
The Portal must not appear in:
- geometry.json
- adjacency.json
- index.js
- slots/
- any structural container

The Portal cannot define or alter structure.

---

### 3. The Portal is non‑behavioral
The Portal cannot encode:
- triggers
- conditions
- logic flows
- state machines
- workflows
- operational modules

The Portal is not a behavior engine.

---

### 4. The Portal is non‑semantic
The Portal cannot encode:
- labels
- copy
- narrative meaning
- UI text
- content

The Portal is not a semantic layer.

---

### 5. The Portal is non‑UI
The Portal cannot encode:
- UI transitions
- UI scenes
- UI animations
- UI edges

UI-plane may interpret Portal transitions but may not define or alter them.

---

### 6. The Portal is non‑operational
The Portal cannot encode:
- service logic
- concierge logic
- operational flows
- business rules

Operational-plane may use Portal transitions but may not define or alter them.

---

### 7. The Portal is immutable at runtime
The engine may read Portal definitions but may not:
- modify them
- generate new Portals
- delete Portals
- reinterpret Portals as behavior or structure

Portal definitions are static and defined only in 2_Architecture.

---

## Cross‑Plane Rules

- 2_Architecture **defines** the Portal.
- 1_Engine **reads** Portal definitions but may not modify them.
- 3_Registry may **reference** Portal definitions but may not define or alter them.
- 4_Semantics may **interpret** Portal transitions but may not alter or extend them.
- UI-plane may **render** Portal transitions but may not contain or modify them.
- Operational-plane may **use** Portal transitions but may not define or contain them.
- Only 0_Rules defines what the Portal *is*.

These rules ensure the Portal remains a world‑plane transition mechanism and nothing else.

---

## Drift Conditions

Portal drift occurs when:
- Portal definitions appear in structural files
- Portal encodes behavior or logic
- Portal encodes semantics or UI
- Portal encodes operational flows
- Portal is redefined outside 2_Architecture
- Portal is interpreted as structure or placement
- Portal is missing from a container that requires it

All Portal drift must be corrected explicitly.
