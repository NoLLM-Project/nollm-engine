# Geometry Rules

This directory defines the geometric structure of the system. Geometry
here is not semantic or behavioral—it is the spatial logic that governs
how all coordinates, districts, rooms, and circulation paths are placed.

Geometry operates along three axes:

- **z** → vertical districts (slices)
- **y** → functional bands within each district
- **x** → horizontal domain separation

These rules ensure the hotel remains collision‑free, predictable, and
scalable as it expands.

---

## Directory Structure

### boundaries/
Defines the geometric limits of each scale:
- world boundaries
- hotel boundaries
- district boundaries

These files describe the outermost spatial constraints.

### circulation/
Defines the geometry of movement:
- horizontal circulation (hallways, corridors)
- vertical circulation (elevators, stairwells)

These rules ensure circulation paths remain continuous and aligned.

### relationships/
Defines how geometric entities relate:
- adjacency rules
- containment rules
- boundary rules

This folder also contains the **core geometric invariants**:

- `y_band_rules.md` — functional vertical bands  
- `x_band_rules.md` — horizontal domain separation  
- `z_slice_rules.md` — district stacking  

These invariants form the backbone of the coordinate system.

### surfaces/
Defines the conceptual surfaces of each container (world, hotel,
district). Surfaces describe the outermost geometric layer and how
boundaries are perceived.

### geometry_rules.md
A high‑level overview of the geometry system. This file ties together
the invariants, boundaries, circulation, and relationships into a single
coherent model.

---

## Purpose of This Directory

The geometry rules define:

- where objects may exist  
- how districts stack vertically  
- how functional bands align horizontally  
- how circulation flows through the structure  
- how domains remain separated  
- how collisions are prevented  
- how the coordinate system stays stable over time  

All higher‑level categories (floors, rooms, services, public spaces)
must conform to the geometry defined here.

---

## Core Invariants

The following invariants apply across all z‑levels:

- **y‑bands** define function (hallways, rooms, lobby, service, shafts)
- **x‑bands** define domain (guest, public, circulation spine)
- **z‑slices** define districts (service, lobby, public, guest floors)
- vertical connectors must align at `y = 0`
- hallways must align at `y = 5`
- guest rooms must align at `y = 4`
- public corridors must align at `y = 3`
- no two objects may share the same `(x, y, z)`

These invariants prevent drift and ensure the geometry remains coherent.

---

## How to Use This Directory

When adding new geometry:

1. **Check the y‑band rules** for correct vertical placement.
2. **Check the x‑band rules** for domain separation.
3. **Check the z‑slice rules** for district alignment.
4. **Check adjacency and containment rules** for graph correctness.
5. **Check boundaries and surfaces** when adding new outer structures.

If a new object violates any invariant, the geometry must be corrected
before the object is added.

---

## Status

This directory is the authoritative source of truth for spatial logic.
All geometry must conform to the rules defined here.
