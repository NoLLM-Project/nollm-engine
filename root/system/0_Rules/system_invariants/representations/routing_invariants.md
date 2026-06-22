# Routing Invariants (0_Rules / invariants_rules / System)

## Scope
These invariants define the system‑level constraints for routing within the world-plane.
Routing is a representational mechanism, not structure, identity, placement, or behavior.

These invariants define **what routing is**, not how routing is implemented.

---

## Core Principles

### 1. Routing is representational, not structural
Routing describes:
- allowed movement paths
- allowed transitions
- allowed adjacency traversal

Routing does **not** describe:
- geometry
- placement
- identity
- semantics
- behavior
- operational logic

### 2. Routing is non‑structural
Routing must not appear in:
- geometry.json
- adjacency.json
- index.js
- slots/

Routing cannot define or alter structure.

### 3. Routing is non‑behavioral
Routing cannot encode:
- triggers
- conditions
- logic
- state
- workflows
- operational modules

Routing is not a behavior engine.

### 4. Routing is non‑semantic
Routing cannot encode:
- labels
- copy
- narrative meaning
- UI text
- content

Routing is not a semantic layer.

### 5. Routing is non‑UI
Routing cannot encode:
- UI transitions
- UI scenes
- UI animations
- UI edges

UI-plane may interpret routing but may not define or alter it.

### 6. Routing is non‑operational
Routing cannot encode:
- operational flows
- service logic
- concierge logic
- engine workflows

Operational-plane may use routing but may not define or alter it.

### 7. Routing is immutable at runtime
The engine may read routing but may not:
- modify it
- generate new routing
- delete routing
- reinterpret routing as behavior

Routing is static and defined only in 2_Architecture.

---

## Cross‑Plane Rules

- 2_Architecture **defines** routing.
- 1_Engine **reads** routing but may not modify it.
- 3_Registry may **reference** routing but may not define or alter it.
- 4_Semantics may **interpret** routing but may not alter or extend it.
- UI-plane may **render** routing but may not contain or modify it.
- Operational-plane may **use** routing but may not define or contain it.
- Only 0_Rules defines what routing *is*.

These rules ensure routing remains representational and sovereign.

---

## Drift Conditions

Routing drift occurs when:
- routing appears in structural files
- routing encodes behavior or logic
- routing encodes semantics or UI
- routing encodes operational flows
- routing is redefined outside 2_Architecture
- routing is interpreted as structure or placement
- routing is missing from a container that requires it

All routing drift must be corrected explicitly.
