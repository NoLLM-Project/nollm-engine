# Placement rules

## Scope
Defines where containers are allowed to live in the system.

## Top‑level planes
- `0_Rules`
- `1_Engine`
- `2_Architecture`
- `3_Registry`
- `4_Semantics`

No other top‑level planes are allowed.

## Architecture placement
- `A_World` lives in `2_Architecture/`.
- `B_Districts` lives in `2_Architecture/A_World/`.
- `C_Hotel` lives in `2_Architecture/A_World/`.
- `D_Tower` lives in `2_Architecture/A_World/`.

## Hotel placement
- `lobby/` is a direct child of `C_Hotel/`.
- `floors/`, `public_spaces/`, `services/`, `shell/` are direct children of `C_Hotel/`.
- Floors do not contain lobby.
- Lobby does not contain floors.

## District placement
- `district_xx/` lives in `B_Districts/`.
- `buildings/` lives inside a district.
- `guides/` and `maps/` live inside a district.

## Cross‑plane placement
- 3_Registry may not introduce new structural containers.
- 4_Semantics may not introduce new structural containers.
- 1_Engine may not persist new containers without conforming to 0_Rules.

Any container outside these placements is considered drift.
