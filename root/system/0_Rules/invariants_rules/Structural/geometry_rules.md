\# Geometry Rules (0\_Rules / invariants\_rules / Structural)



\## Scope

These rules define the conceptual meaning and system‑level constraints of geometry

across all planes. Geometry is a structural representation of shape, not meaning,

behavior, metadata, or content.



These rules define \*\*what geometry is\*\*, not how geometry is implemented or used.



\---



\## Core Principles



\### 1. Geometry encodes shape only

Geometry describes:

\- outlines

\- boundaries

\- centroids

\- elevations



Geometry does \*\*not\*\* describe:

\- purpose

\- usage

\- semantics

\- behavior

\- metadata

\- content

\- identity

\- placement



\### 2. Geometry is non‑semantic

No geometry file may contain:

\- labels

\- names

\- categories

\- roles

\- interpretations

\- narrative meaning



\### 3. Geometry is non‑behavioral

Geometry cannot encode:

\- routing

\- triggers

\- logic

\- state

\- conditions

\- operational modules



\### 4. Geometry is non‑environmental

Geometry cannot encode:

\- lighting

\- weather

\- materials

\- physics

\- sound

\- UI attributes



\### 5. Geometry is immutable at runtime

The engine may read geometry but may not:

\- modify it

\- generate new geometry

\- delete geometry

\- reinterpret geometry

\- derive behavior from geometry



\### 6. Geometry is defined only in 2\_Architecture

No other plane may define, override, or extend geometry.



Geometry is structural; it cannot appear in:

\- Registry

\- Engine

\- Semantics

\- UI

\- Operational



\---



\## Cross‑Plane Rules



\- 2\_Architecture \*\*defines\*\* geometry.

\- 1\_Engine \*\*reads\*\* geometry but may not modify it.

\- 3\_Registry may \*\*reference\*\* geometry but may not define or alter it.

\- 4\_Semantics may \*\*interpret\*\* geometry but may not alter or extend it.

\- UI-plane may \*\*render\*\* geometry but may not contain or modify it.

\- Operational-plane may \*\*use\*\* geometry but may not define or contain it.

\- Only 0\_Rules defines what geometry \*is\*.



These rules ensure geometry remains structurally sovereign.



\---



\## Drift Conditions



Geometry drift occurs when:

\- semantics appear in geometry

\- behavior appears in geometry

\- metadata appears in geometry

\- identity or placement appears in geometry

\- geometry is missing from a structural container

\- geometry is redefined outside 2\_Architecture

\- geometry is interpreted as behavior or semantics

\- geometry is used to encode routing or operational logic



All geometry drift must be corrected explicitly.



