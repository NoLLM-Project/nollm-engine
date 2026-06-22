# Concierge Invariants (0_Rules / invariants_rules / System)

## Scope
These invariants define the system‑level constraints for concierge functions.
Concierge is a representational and operational mechanism, not structure,
identity, placement, geometry, or semantics.

These invariants define **what concierge is**, not how concierge is implemented.

---

## Core Principles

### 1. Concierge is representational, not structural
Concierge describes:
- service access patterns
- service lookup
- service dispatch
- service availability

Concierge does **not** describe:
- geometry
- placement
- identity
- world structure
- adjacency
- routing paths

Concierge must not appear in any structural container.

---

### 2. Concierge is non‑structural
Concierge must not appear in:
- geometry.json
- adjacency.json
- index.js
- slots/
- any world-plane container

Concierge cannot define or alter structure.

---

### 3. Concierge is non‑behavioral (in the Engine sense)
Concierge cannot encode:
- triggers
- conditions
- logic flows
- state machines
- workflows
- operational modules

Concierge is not a behavior engine.

---

### 4. Concierge is non‑semantic
Concierge cannot encode:
- labels
- copy
- narrative meaning
- UI text
- content

Concierge is not a semantic layer.

---

### 5. Concierge is non‑UI
Concierge cannot encode:
- UI transitions
- UI scenes
- UI animations
- UI edges
- UI routing

UI-plane may interpret concierge results but may not define or alter concierge.

---

### 6. Concierge is non‑operational (in the service-logic sense)
Concierge cannot encode:
- service logic
- operational flows
- business rules
- engine workflows

Operational-plane may use concierge but may not define or alter it.

---

### 7. Concierge is immutable at runtime
The engine may read concierge definitions but may not:
- modify them
- generate new concierge entries
- delete concierge entries
- reinterpret concierge as behavior or structure

Concierge is static and defined only in 2_Architecture.

---

## Cross‑Plane Rules

- 2_Architecture **defines** concierge.
- 1_Engine **reads** concierge but may not modify it.
- 3_Registry may **reference** concierge but may not define or alter it.
- 4_Semantics may **interpret** concierge but may not alter or extend it.
- UI-plane may **render** concierge results but may not contain or modify concierge.
- Operational-plane may **use** concierge but may not define or contain it.
- Only 0_Rules defines what concierge *is*.

These rules ensure concierge remains representational and sovereign.

---

## Drift Conditions

Concierge drift occurs when:
- concierge appears in structural files
- concierge encodes behavior or logic
- concierge encodes semantics or UI
- concierge encodes operational flows
- concierge is redefined outside 2_Architecture
- concierge is interpreted as structure or placement
- concierge is missing from a container that requires it

All concierge drift must be corrected explicitly.
