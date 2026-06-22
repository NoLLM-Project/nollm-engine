\# Geometry Rules



This directory defines the geometric invariants of the system. Geometry

here is not aesthetic; it is the structural logic that prevents drift,

collisions, and category confusion across all districts of the hotel.



Geometry rules describe how space is organized along three axes:



\- \*\*z\*\* → vertical districts (slices)

\- \*\*y\*\* → functional bands within each district

\- \*\*x\*\* → horizontal domain separation



These rules apply to every coordinate in the system.



\---



\## Folder Structure



\### boundaries/

Defines the geometric boundaries of each scale:

\- world

\- hotel

\- district



These files describe the outer limits of each container and how they

relate spatially.



\### circulation/

Defines geometric rules for movement:

\- horizontal circulation (hallways, corridors)

\- vertical circulation (elevators, stairwells)



These rules ensure circulation paths remain continuous and collision‑free.



\### relationships/

Defines how geometric entities relate:

\- adjacency rules

\- containment rules

\- boundary rules



This folder also contains the \*\*core invariants\*\* that govern the system:

\- `y\_band\_rules.md`

\- `x\_band\_rules.md`

\- `z\_slice\_rules.md`



These three files encode the fixed coordinate bands and district stacking

that all geometry must obey.



\### surfaces/

Defines the conceptual “surfaces” of each scale (world, hotel, district).

Surfaces describe the outermost geometric layer of each container.



\### geometry\_rules.md

A high‑level overview of the geometry system. This file links the

invariants, boundaries, circulation, and relationships into a single

coherent model.



\---



\## Purpose of This Directory



The geometry rules define:



\- where objects may exist  

\- how districts stack  

\- how circulation flows  

\- how domains remain separated  

\- how collisions are prevented  

\- how the coordinate system stays stable over time  



These rules are \*\*foundational\*\*. All higher‑level categories (floors,

rooms, services, public spaces) must conform to the geometry defined here.



\---



\## Invariants



The following invariants are enforced across all z‑levels:



\- \*\*y‑bands\*\* define function (hallways, rooms, lobby, service, shafts)

\- \*\*x‑bands\*\* define domain (guest, public, circulation spine)

\- \*\*z‑slices\*\* define districts (service, lobby, public, guest floors)

\- vertical connectors always align at `y = 0`

\- hallways always align at `y = 5`

\- guest rooms always align at `y = 4`

\- public corridors always align at `y = 3`

\- no two objects may share the same `(x, y, z)`



These invariants prevent drift and ensure the hotel remains structurally

coherent as it expands.



\---



\## How to Use This Directory



When adding new floors, rooms, districts, or circulation paths:



1\. \*\*Check the y‑band rules\*\* to ensure correct vertical placement.

2\. \*\*Check the x‑band rules\*\* to ensure domain separation.

3\. \*\*Check the z‑slice rules\*\* to ensure the district is valid.

4\. \*\*Check adjacency and containment rules\*\* to ensure correct graph

&#x20;  relationships.

5\. \*\*Check boundaries and surfaces\*\* if adding new outer structures.



If a new object violates any invariant, the geometry must be corrected

before the object is added.



\---



\## Status



This directory is the authoritative source of truth for spatial logic.

All geometry must conform to the rules defined here.



