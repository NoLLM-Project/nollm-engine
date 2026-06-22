# Adjacency Rules

## Scope
These rules define the conceptual meaning of adjacency across the entire system.
They apply to all planes:
- 0_Rules
- 1_Engine
- 2_Architecture
- 3_Registry
- 4_Semantics

These rules define **what adjacency is**, not how adjacency is stored, validated, or implemented.

---

## Core Principle
Adjacency represents **contact**, not meaning, behavior, or routing.

Adjacency answers only:
- Which containers physically or structurally touch?

Adjacency does **not** answer:
- why they touch  
- how they are used  
- how to navigate between them  
- what they mean  
- what they contain  
- what they do  

---

## Properties of Adjacency

### 1. Non‑directional
If A is adjacent to B, then B is adjacent to A.

### 2. Non‑semantic
Adjacency cannot encode:
- purpose  
- priority  
- category  
- role  
- meaning  

No labels such as:
- “main”
- “primary”
- “preferred”
- “safe”
- “restricted”

### 3. Non‑weighted
Adjacency cannot encode:
- distance  
- cost  
- weight  
- priority  
- difficulty  

### 4. Non‑behavioral
Adjacency cannot encode:
- routing  
- pathfinding  
- triggers  
- state  
- permissions  
- conditions  

### 5. Purely structural
Adjacency is defined by **contact**, not by:
- usage  
- semantics  
- behavior  
- metadata  
- environment  

---

## Allowed Adjacency Relationships
These relationships define **which container types may be adjacent**, not how adjacency is represented.

- world ↔ districts  
- district ↔ district  
- district ↔ building  
- building ↔ building (if footprints touch)  
- hotel lobby ↔ hotel floors  
- floors ↔ floors (vertical neighbors)  
- floors ↔ public_spaces  
- floors ↔ services  
- room ↔ room  
- room ↔ circulation  

These are **allowed relationships**, not schemas.

---

## Cross‑Plane Rules

- 2_Architecture **defines** adjacency.  
- 1_Engine **reads** adjacency but may not modify it.  
- 3_Registry may **reference** adjacency but may not define it.  
- 4_Semantics may **interpret** adjacency but may not alter it.  
- Only 0_Rules defines what adjacency *is*.  

No plane may redefine adjacency.

---

## Drift Conditions

Adjacency drift occurs when:
- semantics appear in adjacency  
- directionality is introduced  
- routing or behavior appears  
- adjacency is defined outside 2_Architecture  
- adjacency is modified by a non‑structural plane  
- adjacency is reinterpreted as meaning or behavior  

These conditions define drift; they do not describe detection or correction.
