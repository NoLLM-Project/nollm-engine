# Metadata Contract (Registry Layer)

Metadata lives inside the Registry layer.  
It is descriptive, optional, and non-identity.  
It must never define world structure, semantics, or behavior.

---

## Purpose

Metadata provides optional descriptive fields for registry objects.  
It is not authoritative.  
It is not canonical.  
It is not required for Engine operation.

---

## Boundaries

- Metadata must not define identity.
- Metadata must not define scenes.
- Metadata must not define world structure.
- Metadata must not define semantics.
- Metadata must not influence the Engine.
- Metadata must not fill gaps or infer missing information.

---

## Allowed Content

- Descriptive fields (labels, notes)
- Optional annotations
- Human-facing descriptions

---

## Forbidden Content

- Coordinates
- Scene definitions
- World geometry
- Behavior logic
- Semantic meaning
- Identity fields
- Fallbacks or defaults
- Inference rules

---

## Relationship to Other Layers

- Engine does not read metadata.
- Metadata cannot override identity.
- Metadata cannot influence scene loading.
- Semantics may read metadata, but metadata cannot define semantics.

---

## Invariants

- No cross-layer fusion.
- No inference.
- No guessing.
- Metadata is descriptive only.
