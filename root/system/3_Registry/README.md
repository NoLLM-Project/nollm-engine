# 03‑Registry  
### The Identity, Structure, and Behavioral Contract of the NoLLM Architecture

The **Registry** is the authoritative source of truth for every object in the NoLLM system.  
It defines:

- **what** exists (Naming)  
- **where** it exists (Coordinates)  
- **how** it is uniquely identified (SKUs)  
- **what it means** (Metadata)  
- **how it moves or transitions** (Routing)  
- **where it is allowed to be placed** (Placement)  

The Registry is the **backbone of determinism** in NoLLM.  
Nothing in the world, hotel, UI, or operational planes exists outside the Registry.

---

# 1. Purpose of the Registry

The Registry ensures:

- **identity consistency**  
- **structural correctness**  
- **non‑drifting semantics**  
- **deterministic routing and placement**  
- **versioned evolution**  
- **plane separation** (world, hotel, UI, operational)  
- **safe extensibility**  

Every subsystem in NoLLM depends on the Registry to remain stable and predictable.

---

# 2. Structure of the Registry

03‑Registry/
Coordinates/
Metadata/
Naming/
Placement/
Routing/
SKUs/


Each folder contains:

- a schema  
- invariants  
- constraints  
- a namespace or object list  
- a README describing the subsystem  

Together, these define the **complete identity contract** of the system.

---

# 3. Subsystems Overview

## 3.1 Naming  
Defines the **canonical names** of all objects.

Files include:

- `canonical_names.json`  
- `naming.schema.json`  
- `aliases.json`  
- `naming_invariants.md`  

Naming ensures:

- every object has a single canonical identity  
- aliases map legacy names to canonical names  
- names remain stable across versions  

---

## 3.2 Coordinates  
Defines **where** objects exist in spatial or abstract planes.

Files include:

- `coordinate_schema.json`  
- `abstract_coordinates.json`  
- `world_coordinates.json`  
- `hotel_coordinates.json`  
- `room_coordinates.json`  
- `adjacency_rules.json`  
- `coordinate_invariants.json`  

Coordinates ensure:

- spatial determinism  
- adjacency correctness  
- world/hotel/UI plane separation  

---

## 3.3 SKUs  
Defines **unique identity keys** for all objects.

Files include:

- `sku.schema.json`  
- `sku_namespace.json`  
- `sku_invariants.md`  
- `sku_metadata_map.json`  
- `sku_to_object_map.json`  

SKUs bind together:

- canonical name  
- coordinate  
- metadata  
- category  
- version  

SKUs are the **cross‑plane identity anchor** of the system.

---

## 3.4 Metadata  
Defines the **descriptive identity** of each object.

Files include:

- `metadata.schema.json`  
- `metadata_objects.json`  
- `anchors.json`  
- `continuity.json`  
- `metadata_type.json`  
- `metadata_invariants.md`  

Metadata provides:

- identity anchors  
- continuity rules  
- stability rules  
- descriptive properties  

Metadata is the **semantic layer** of the Registry.

---

## 3.5 Routing  
Defines **movement, transitions, and dispatch**.

Files include:

- `routing.schema.json`  
- `routing_transitions.json`  
- `routing_constraints.json`  
- `routing_profiles.json`  
- `routing_metadata.json`  
- `routing_invariants.md`  

Routing governs:

- world navigation  
- hotel navigation  
- UI transitions  
- service behaviors  
- module dispatch  
- error handling  

Routing is the **behavioral layer** of the Registry.

---

## 3.6 Placement  
Defines **where objects are allowed to exist**.

Files include:

- `placement.schema.json`  
- `world_placement.json`  
- `hotel_placement.json`  
- `llm_floor_placement.json`  
- `bridge_placement.json`  
- `nollm_floor_placement.json`  
- `service_placement.json`  
- `ui_placement.json`  
- `operational_placement.json`  
- `placement_invariants.md`  

Placement enforces:

- world → hotel → floor → room hierarchy  
- LLM‑only / shared / NoLLM‑only floor rules  
- service‑plane isolation  
- UI‑plane isolation  
- operational‑plane isolation  

Placement is the **structural layer** of the Registry.

---

# 4. How the Subsystems Interlock

The Registry is not six independent systems — it is one **interdependent identity graph**.

### Naming → SKUs  
Canonical names define object identity.  
SKUs bind that identity to coordinates and metadata.

### SKUs → Coordinates  
SKUs reference coordinate IDs.  
Coordinates define spatial or abstract location.

### Coordinates → Placement  
Placement rules define where coordinates may appear.

### Placement → Routing  
Routing transitions must respect placement constraints.

### Routing → Metadata  
Routing behaviors use metadata to determine meaning and continuity.

### Metadata → Naming  
Metadata names must match canonical names.

Everything reinforces everything else.

This is what prevents drift.

---

# 5. Global Registry Invariants

Across all subsystems:

- IDs must be unique  
- canonical names must be stable  
- SKUs must be globally unique  
- coordinates must match placement plane  
- metadata must match SKU category  
- routing must respect placement  
- placement must respect coordinates  
- no cycles in containment hierarchy  
- no object may exist outside its allowed plane  
- no subsystem may contradict another  

These invariants ensure the Registry remains **coherent, deterministic, and extensible**.

---

# 6. Adding a New Object to the Registry

To add a new object, you must update **all six subsystems**:

1. **Naming**  
   - Add canonical name  
   - Add aliases  

2. **Coordinates**  
   - Add coordinate ID  
   - Add adjacency if needed  

3. **SKUs**  
   - Add SKU entry  
   - Add SKU → object mapping  

4. **Metadata**  
   - Add metadata object  
   - Assign anchors, continuity, properties  

5. **Routing**  
   - Add routing transitions (if navigable or callable)  

6. **Placement**  
   - Add placement rules  
   - Define allowed parents/children  

This is the **identity pipeline** of NoLLM.

---

# 7. Mental Model Summary

- **Naming** → what it is  
- **Coordinates** → where it is  
- **SKUs** → unique identity  
- **Metadata** → what it means  
- **Routing** → how it moves  
- **Placement** → where it is allowed to be  

The Registry ensures that NoLLM remains:

- deterministic  
- modular  
- non‑drifting  
- identity‑consistent  
- structurally sound  

This folder is the **identity contract** of the entire architecture.

# Registry Layer Overview (Identity + Metadata)

The Registry is the canonical identity layer of the system.  
It defines identity objects and optional descriptive metadata.  
It does not define semantics, world structure, or behavior.

---

## Purpose

- Provide stable identity objects used across the system.
- Store optional descriptive metadata for those objects.
- Serve as the single source of truth for identity.

---

## Boundaries

### Identity
- Identity is defined only here.
- Identity must not be inferred or generated elsewhere.
- Identity must not be modified by Engine, World, or Semantics.

### Metadata
- Metadata is descriptive only.
- Metadata must not define semantics or world structure.
- Metadata must not influence the Engine or scene loading.
- Metadata must not fill gaps or create defaults.

---

## Allowed Content

- Identity objects
- Optional descriptive metadata fields
- Lookup tables
- Non-semantic annotations

---

## Forbidden Content

- Coordinates
- Scene definitions
- World geometry
- Behavior logic
- Semantic meaning
- Fallbacks or inference rules

---

## Relationship to Other Layers

- **Engine (1_Engine/):** Reads identity only; does not read metadata.
- **World Architecture (2_World_Architecture/):** Uses identity but does not define it.
- **Semantics (4_Semantics/):** May interpret metadata but cannot define identity.

---

## Invariants

- No cross-layer fusion.
- No inference or guessing.
- Identity is canonical.
- Metadata is descriptive only.


