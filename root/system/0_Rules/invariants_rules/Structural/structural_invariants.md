# Structural Invariants (0_Rules / invariants_rules / Structural)

## Scope
These invariants define the required structural pattern for all containers in 2_Architecture.
They apply to every structural container, regardless of type or scale.

These invariants define **what must exist**, not **what those files contain**,
and not how structure is interpreted, placed, or executed.

---

## Core Principle
Every structural container in 2_Architecture must follow the same invariant pattern.

This ensures:
- uniformity
- predictability
- cross‑plane stability
- drift resistance
- structural purity

---

## Required Structural Pattern

Every structural container must contain exactly the following elements:

### 1. geometry.json
Represents the container’s physical shape.
- Must exist.
- Must be a standalone file.
- Must not contain semantics, behavior, metadata, or environment-specific content.

*(The internal schema is defined elsewhere.)*

---

### 2. adjacency.json
Represents the container’s structural contacts.
- Must exist.
- Must be a standalone file.
- Must not contain semantics, routing logic, or behavior.

*(The internal schema is defined elsewhere.)*

---

### 3. index.js
Represents the structural index for the container.
- Must exist.
- Must not contain runtime logic or behavior.
- Must not contain semantics, metadata, or environment-specific logic.

*(The internal structure is defined elsewhere.)*

---

### 4. slots/
A directory reserved for structural extension.
- Must exist.
- Must not contain semantics, metadata, behavior, or environment-specific files.

*(The internal usage is defined elsewhere.)*

---

## Prohibited Structural Variations

The following are **not allowed** inside any structural container:

- additional structural files not defined above  
- renamed or repurposed structural files  
- environment-specific files (`dev_`, `prod_`, `test_`)  
- metadata files (`config.json`, `metadata.json`, `menu.json`)  
- behavior files (logic, handlers, workflows)  
- semantic files (copy, labels, content)  
- operational modules  
- UI files or assets  

Any deviation from the required pattern is structural drift.

---

## Cross‑Plane Structural Rules

- 2_Architecture defines structure; no other plane may define it.
- 1_Engine may read structure but may not modify it.
- 3_Registry may reference structure but may not define or alter it.
- 4_Semantics may interpret structure but may not alter or extend it.
- UI-plane may render structure but may not contain or modify it.
- Operational-plane may use structure but may not define or contain it.
- Only 0_Rules defines what structure *is*.

These rules ensure structural sovereignty.

---

## Structural Drift Conditions

Structural drift occurs when:

- any required structural element is missing  
- any prohibited element is present  
- structure is defined outside 2_Architecture  
- structure is modified by a non‑structural plane  
- structure is reinterpreted as semantics or behavior  
- structure contains identity, placement, or operational logic  
- structure contains UI or semantic content  

All structural drift must be corrected explicitly.
