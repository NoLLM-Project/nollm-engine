# Drift Rules

## Scope
These rules define the categories of drift that can occur anywhere in the system.
They apply to all planes:
- 0_Rules
- 1_Engine
- 2_Architecture
- 3_Registry
- 4_Semantics

These rules define **what drift is**, not how drift is detected or corrected.

---

## Core Principle
Drift is any deviation from the system’s constitutional rules.

Drift is always defined at the **rule level**, not the implementation level.

---

## Categories of Drift

### 1. Naming Drift
A violation of naming_rules.md.
Examples:
- uppercase letters in folder names
- camelCase or PascalCase
- semantic names in structural layers
- inconsistent numbering (e.g., floor1 vs floor_01)

---

### 2. Casing Drift
A violation of casing_rules.md.
Examples:
- mixed case in filenames
- uppercase extensions
- inconsistent casing across planes

---

### 3. Structural Drift
A violation of structural_invariants.md.
Examples:
- missing geometry.json
- missing adjacency.json
- missing index.js
- missing slots/
- extra structural files that do not belong

---

### 4. Adjacency Drift
A violation of adjacency_rules.md.
Examples:
- directional edges
- semantic labels in adjacency
- routing or pathfinding logic
- referencing nonexistent containers

---

### 5. Geometry Drift
A violation of geometry_rules.md.
Examples:
- semantics inside geometry
- behavior inside geometry
- metadata inside geometry
- geometry defined outside 2_Architecture

---

### 6. Placement Drift
A violation of placement_rules.md.
Examples:
- containers in the wrong folder
- hotel floors outside C_Hotel
- buildings outside districts
- world‑level containers nested incorrectly

---

### 7. Contamination Drift
A violation of contamination_rules.md.
Examples:
- metadata in architecture
- behavior in registry
- semantics in engine
- environment‑specific files in structure

---

### 8. Governance Drift
A violation of governance_rules/.
Examples:
- unauthorized planes writing to structure
- semantics overriding architecture
- engine mutating immutable containers

---

### 9. Protocol Drift
A violation of protocols/.
Examples:
- planes communicating in forbidden directions
- registry writing to rules
- semantics bypassing registry

---

## Drift Severity Levels

### Minor Drift
- cosmetic naming issues  
- casing inconsistencies  
- missing optional fields  

### Major Drift
- structural violations  
- contamination across planes  
- adjacency or geometry corruption  

### Critical Drift
- rule overrides  
- cross‑plane contamination  
- unauthorized mutation of structure  
- any violation of 0_Rules  

---

## Cross‑Plane Rule
Drift is always defined by **0_Rules**, never by:
- 1_Engine  
- 2_Architecture  
- 3_Registry  
- 4_Semantics  

No plane may redefine what drift is.

---

## Purpose
The purpose of drift rules is:
- to define the categories of drift  
- to classify violations  
- to maintain system integrity  

This file does **not** define:
- how drift is detected  
- how drift is corrected  
- how drift is logged  

Those belong to implementation, not rules.

---

# System Category Drift

These rules define drift between system-wide categories.  
They extend, but do not replace, the existing drift categories above.

## Registry ↔ Engine Drift
- Registry must not define behavior, interpretation, stance, continuity, or error handling.
- Engine must not define identity, placement, coordinates, SKUs, metadata, or static routing tables.
- Registry defines the graph; Engine traverses it.

## World ↔ UI Drift
- World-plane objects must not appear in the UI-plane.
- UI-plane objects must not appear in the world-plane.
- UI may render representations of world objects but may not contain them.

## World ↔ Operational Drift
- Operational modules must not appear in the world-plane.
- World-plane objects must not appear in the operational-plane.

## Semantics ↔ Structure Drift
- Semantics must not define placement, identity, or structure.
- Structure must not encode meaning, narrative, or interpretation.

## Collapse Drift
- Collapse must not become a container.
- Collapse must not hold objects, metadata, or structure.
- Collapse is a mechanic, not a place.

---

# Plane Drift

Plane drift occurs when objects appear in planes where they are not allowed.

- World-plane objects must not appear in UI, operational, engine, or registry planes.
- Operational-plane objects must not appear in world, UI, engine, or registry planes.
- Engine-plane objects must not appear in world, UI, operational, or registry planes.
- Registry-plane objects must not appear in world, UI, operational, or engine planes.
- Semantics must not appear in any structural plane.

---

# Summary of System Drift Boundaries

- Registry → identity only; never behavior  
- Engine → behavior only; never identity  
- Semantics → interpretation only; never placement  
- UI → representation only; never containment  
- Operational → function only; never structure  
- World → structure only; never behavior  
- Collapse → mechanic only; never container  

