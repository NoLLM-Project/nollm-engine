# Category Boundaries (0_Rules)

This document defines the category-level containment rules for the system.
It establishes what each category *is* and what each category *may contain*.
It does not define instances, coordinates, SKUs, routing, or semantics.

All boundaries in this file are category-level, stable, and invariant.

---

## Category: hotel
type: container

A hotel is a top-level architectural container.

A hotel may contain:
- floor (category)

A hotel may not contain:
- room
- circulation
- semantics
- operations
- instances of any category

---

## Category: floor
type: container

A floor is a structural container within a hotel.

A floor may contain:
- room (category)
- circulation (category)
- floor-level metadata (category)

A floor may not contain:
- hotel
- other floors
- semantics
- operations
- instances of any category

---

## Category: room
type: container

A room is a terminal architectural container.

A room may contain:
- room-level metadata (category)

A room may not contain:
- other rooms
- circulation
- floors
- hotel
- semantics
- operations
- instances of any category

---

## Category: circulation
type: structure

Circulation is a structural geometry category.

Circulation may contain:
- circulation geometry rules (category)

Circulation may not contain:
- rooms
- floors
- hotels
- semantics
- operations
- instances of any category

---

## Category: metadata
type: identity-structure

Metadata is identity-level structure associated with containers.

Metadata may contain:
- identity attributes
- structural attributes

Metadata may not contain:
- semantics
- behavior
- operations
- instances of any category

---

## Invariant Summary

- hotel → contains → floor
- floor → contains → room, circulation
- room → contains → nothing
- circulation → contains → nothing
- metadata → attaches to containers, does not contain containers

These boundaries are category-level and do not reference any specific instance.

---

# System Category Boundaries

These boundaries define the separation between system-wide categories.
They prevent identity/behavior drift, plane fusion, and cross-layer contamination.

---

## Category: registry
type: identity-structure

The registry defines:
- what exists
- names
- coordinates
- SKUs
- placement
- static routing tables
- metadata

The registry may not define:
- behavior
- interpretation
- stance
- continuity
- error handling
- runtime routing
- semantics
- operations
- instances created at runtime

Registry defines the graph; it does not traverse it.

---

## Category: engine
type: behavior-execution

The engine defines:
- how the system behaves
- routing execution
- stance evaluation
- continuity rules
- interpreters
- error handling
- state transitions

The engine may not define:
- identity
- placement
- coordinates
- SKUs
- metadata
- static routing tables
- object creation
- container structure

Engine traverses the graph; it does not define it.

---

## Category: semantics
type: interpretation-layer

Semantics defines:
- meaning
- interpretation
- narrative mapping

Semantics may not define:
- placement
- identity
- coordinates
- SKUs
- routing
- behavior
- operations
- world-plane structure

Semantics interprets; it does not place or behave.

---

## Category: ui
type: presentation-plane

UI defines:
- representation
- visualization
- scenes
- transitions
- layers
- styles

UI may not contain:
- world objects
- operational objects
- semantics
- registry objects
- engine behavior

UI renders; it does not contain or interpret.

---

## Category: operational
type: functional-plane

Operational defines:
- modules
- validators
- routing nodes

Operational may not:
- appear in the world-plane
- define identity
- define placement
- define semantics
- define UI
- define behavior outside module contracts

Operational executes functions; it does not define structure.

---

## Category: world
type: spatial-plane

World defines:
- world_root
- districts
- hotel
- tower
- field
- adjacency

World may not contain:
- UI
- operational objects
- semantics
- engine behavior

World is structure; not behavior.

---

## Category: collapse
type: mechanic

Collapse defines:
- fallback rules
- invariant failure modes

Collapse is not:
- a container
- a room
- a plane
- a structure
- a semantic object

Collapse is a mechanic, not a place.

---

# Summary of System Boundaries

- Registry → defines identity; never behavior
- Engine → defines behavior; never identity
- Semantics → interprets; never places
- UI → renders; never contains
- Operational → executes; never structures
- World → structures; never interprets
- Collapse → mechanics; never containers
