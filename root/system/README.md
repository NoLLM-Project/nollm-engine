# system/

This directory contains the core subsystems of the world model.  
Each folder corresponds to a distinct responsibility within the system layer.  
These folders do not overlap, do not fuse, and do not redefine one another.

This README anchors the boundaries so the system remains quiet and stable.

---

## Folder Overview

### `0_Rules/`
Defines **category truths**, **invariants**, and **allowed relationships**.  
Specifies what is legal or illegal in the system.  
Does not instantiate structure, store data, interpret meaning, or execute behavior.

### `1_Engine/`
Performs **runtime behavior**, **routing**, and **state transitions**.  
Uses data from the registry but does not modify structure, compute geometry, or interpret meaning.  
Does not define containers or rules.

### `2_Architecture/`
Defines the **containers** and **structural layout** of the world.  
Specifies what exists at the structural level (e.g., world → district → building → floor → room).  
Does not store instances, behavior, meaning, or geometry.

### `3_Registry/`
Stores **instances** of architectural containers and their **factual data**:  
identity, coordinates, metadata, SKUs, placement.  
Does not define structure, meaning, or behavior.

### `4_Semantics/`
Defines **meaning**, **purpose**, and **interpretation** of containers and instances.  
Does not define structure, compute geometry, or execute behavior.

---

## How These Folders Relate (Structural Only)

- `0_Rules/` constrains what `2_Architecture/` is allowed to define.
- `2_Architecture/` defines containers that `3_Registry/` instantiates.
- `3_Registry/` stores the data that `1_Engine/` uses at runtime.
- `4_Semantics/` interprets what `2_Architecture/` defines and what `3_Registry/` stores.
- `1_Engine/` performs behavior using only what `3_Registry/` provides.
- No folder reaches upward to redefine another plane.

---

## Runtime Flow (Folder-Level)

2_Architecture/ → defines containers
3_Registry/ → stores instances of those containers
1_Engine/ → uses registry data to execute behavior
4_Semantics/ → interprets meaning
0_Rules/ → constrain what is allowed


Each folder remains separate.  
Each boundary is stable.  
No folder absorbs another.

---

## Purpose of This Document

This README anchors the **system directory structure** so that future development does not collapse or fuse the planes.  
It is not a design document or a schema — it is a boundary marker.

