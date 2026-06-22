# Scene Invariants (0_Rules / invariants_rules / System)

## Scope
These invariants define the system‑level constraints for Scenes.
Scenes are UI‑plane representational containers, not structure, identity,
placement, geometry, semantics, or behavior.

These invariants define **what a Scene is**, not how Scenes are implemented.

---

## Core Principles

### 1. Scenes are UI‑plane representational containers
Scenes represent:
- UI‑plane views of world‑plane containers
- UI‑plane transitions between representational states
- UI‑plane composition of elements

Scenes do **not** represent:
- world‑plane structure
- geometry
- placement
- identity
- routing
- behavior
- semantics

Scenes are **representations**, not containers of world truth.

---

### 2. Scenes are non‑structural
Scenes must not appear in:
- geometry.json
- adjacency.json
- index.js
- slots/
- any world‑plane container

Scenes cannot define or alter structure.

---

### 3. Scenes are non‑behavioral
Scenes cannot encode:
- triggers
- conditions
- logic flows
- state machines
- workflows
- operational modules

Scenes are not a behavior engine.

---

### 4. Scenes are non‑semantic
Scenes cannot encode:
- labels
- copy
- narrative meaning
- content
- interpretation

Scenes are not a semantic layer.

---

### 5. Scenes are UI‑plane only
Scenes cannot encode:
- world‑plane transitions
- structural adjacency
- geometry
- placement
- identity

Scenes may **reference** world‑plane containers but may not **contain** them.

---

### 6. Scenes are non‑operational
Scenes cannot encode:
- service logic
- concierge logic
- operational flows
- business rules

Operational-plane may use Scenes but may not define or alter them.

---

### 7. Scenes are immutable at runtime
The engine may read Scene definitions but may not:
- modify them
- generate new Scenes
- delete Scenes
- reinterpret Scenes as structure or behavior

Scenes are static and defined only in 2_Architecture.

---

## Cross‑Plane Rules

- 2_Architecture **defines** Scenes.
- 1_Engine **reads** Scene definitions but may not modify them.
- 3_Registry may **reference** Scenes but may not define or alter them.
- 4_Semantics may **interpret** Scenes but may not alter or extend them.
- UI-plane **contains** Scenes but may not define new Scene types.
- Operational-plane may **use** Scenes but may not define or contain them.
- Only 0_Rules defines what a Scene *is*.

These rules ensure Scenes remain UI‑plane representational containers and nothing else.

---

## Drift Conditions

Scene drift occurs when:
- Scenes appear in structural files
- Scenes encode behavior or logic
- Scenes encode semantics or content
- Scenes encode operational flows
- Scenes are redefined outside 2_Architecture
- Scenes are interpreted as structure or placement
- Scenes contain world‑plane containers
- Scenes are missing from a container that requires them

All Scene drift must be corrected explicitly.
