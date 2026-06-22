# Casing rules

## Scope
Applies to all folders and files in all planes.

## Core principles
- Casing must be **predictable**, **uniform**, and **non‑expressive**.
- Casing must never encode semantics or hierarchy.

## Folder casing
- All folder names are lowercase.
- No uppercase letters.
- No mixed case.
- No camelCase or PascalCase.

Examples:
- ✅ `c_hotel`, `public_spaces`, `district_01`
- ❌ `CHotel`, `PublicSpaces`, `District01`

## File casing
- All filenames are lowercase.
- Extensions are lowercase: `.json`, `.md`, `.js`.

Examples:
- ✅ `geometry.json`, `naming_rules.md`
- ❌ `Geometry.JSON`, `NamingRules.MD`

## Plane prefixes
- Top‑level planes may use a numeric prefix + underscore:
  - `0_Rules`
  - `1_Engine`
  - `2_Architecture`
  - `3_Registry`
  - `4_Semantics`
- The numeric prefix is part of the plane identity, not a semantic label.
