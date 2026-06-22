# Placement Invariants (0_Rules / invariants_rules / Structural)

These invariants define what must always be true about spatial, structural,
and plane placement in the system. They are constitutional and cannot be
overridden by rules, behavior, or semantics.

---

## 1. Identity Invariants

- Every placement entry must have a unique `id`.
- `object_id` must reference a valid canonical name.
- All placement entries must conform to `placement.schema.json`.
- Placement invariants must not encode behavior or semantics.

---

## 2. Spatial Invariants

- `world_root` is the top-level spatial container.
- `hotel_shell` must contain `hotel`.
- `hotel` must contain floors.
- Floors must contain rooms and circulation.
- Rooms must not contain rooms.
- Circulation must not contain containers.
- Skeletons must not appear in the world-plane.

These invariants define the immutable spatial hierarchy.

---

## 3. Floor Invariants

- Floor 01 is LLM-only.
- Floor 02 is shared (Bridge).
- Floor 03 is NoLLM-only.
- LLM rooms must be placed on Floor 01.
- Bridge rooms must be placed on Floor 02.
- NoLLM rooms must be placed on Floor 03.

These invariants define the immutable floor partitioning.

---

## 4. Service Invariants

- Lobby must be inside hotel.
- Service objects must be inside lobby.
- Service containers must not appear outside the service zone.
- Service containers must not contain world, UI, or operational objects.

These invariants define the immutable service structure.

---

## 5. UI Invariants

- UI objects must not appear in the world-plane.
- UI layers, styles, animations, and scenes must be inside `ui_root`.
- UI edges must remain inside UI containers.
- UI transitions must remain inside the UI plane.

UI is a presentation plane; it cannot contain or be contained by world structure.

---

## 6. Operational Invariants

- Operational modules must not appear in the world-plane.
- Validators must not appear in the world-plane.
- Routing nodes must not appear in the world-plane.
- Operational objects must remain inside the operational plane.

Operational is a functional plane; it cannot contain or be contained by world structure.

---

## 7. Registry / Engine / Semantics Invariants

- Registry objects must not appear in the world-plane.
- Engine objects must not appear in the world-plane.
- Semantics must not appear in any structural plane.
- Registry defines identity; it cannot contain placement or behavior.
- Engine defines behavior; it cannot contain identity or placement.
- Semantics defines interpretation; it cannot define structure or placement.

These invariants prevent cross-plane contamination.

---

## 8. Integrity Invariants

- No placement may contradict naming, coordinates, metadata, or SKUs.
- No placement may create cycles.
- No placement may bypass required containers or planes.
- No placement may violate adjacency or routing constraints.
- No placement may violate category boundaries.

These invariants ensure global structural integrity.

---

## 9. Enforcement Invariants

These are constitutional requirements, not behavior:

- Placement invariants must be validated before any world-plane update.
- Placement invariants must be validated before any registry update.
- Placement invariants must be validated before any UI-plane update.
- Placement invariants must be validated before any operational update.

Validation is required; execution strategy is not defined here.

