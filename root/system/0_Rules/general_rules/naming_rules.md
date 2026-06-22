# Naming rules

## Scope
These rules apply system‑wide to all planes:
0_Rules, 1_Engine, 2_Architecture, 3_Registry, 4_Semantics.

## Core principles
- Names must be **stable** over time.
- Names must be **non‑semantic** at the structural level.
- Names must be **machine‑friendly** and **human‑legible**.

## Allowed characters
- Lowercase letters: `a–z`
- Digits: `0–9`
- Underscore: `_`
- Dot: `.` only for file extensions

No spaces, hyphens, camelCase, or PascalCase.

## Folder naming
- Folders are lowercase.
- Multi‑word names use underscores: `public_spaces`, `service_room_01`.
- Sequential numbering uses zero‑padded integers: `floor_01`, `building_01`, `room_101`.

## File naming
- Structural files use canonical names:
  - `geometry.json`
  - `adjacency.json`
  - `index.js`
  - `slots/`
- No semantic meaning in structural filenames.

## Prohibited patterns
- Names that encode behavior or meaning: `main_lobby`, `primary_district`, `vip_room`.
- Names that encode time, environment, or state: `test_`, `dev_`, `prod_`.
- Names that encode user, tenant, or project.

All semantics belong in 3_Registry and 4_Semantics, not in names.
