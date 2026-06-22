# Z‑Slice Rules (District Stacking)

Z‑levels represent vertical districts. Each z‑slice may contain multiple
y‑bands. Z does not represent a single floor; it represents a district.

## District Assignments
- z = -1 → service district
- z = 1  → lobby district + guest floor 01
- z = 2  → public district + guest floor 02
- z = 3  → guest floor 03 (compute layer)

## Invariant
A z‑slice may contain multiple functional y‑bands, but each band must
preserve its function. Districts must not overlap across z‑levels.
