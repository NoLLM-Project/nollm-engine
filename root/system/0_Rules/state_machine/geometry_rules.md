\# Geometry Rules (Design‑Level)



These rules define the spatial constraints of the system.

They ensure that all execution remains inside the service corridor and that

no state machine logic leaks into runtime, hotel‑plane, or world‑plane coordinates.



Geometry rules apply to every state:

S0 → S\_PREPROCESS → S\_INVARIANT\_CHECK → S\_POSTPROCESS → S\_ERASE.



\---



\## G1 — Service‑Corridor Containment

All execution must occur strictly within:

\- preprocess  

\- coord\_invariants  

\- postprocess  

\- erase  



No state may enter or reference runtime, hotel‑plane, or world‑plane coordinates.



\---



\## G2 — No Runtime Access

The state machine must not:

\- enter runtime nodes  

\- invoke runtime movement  

\- generate or consume movement tokens  

\- interact with floors, rooms, or elevator logic  



Runtime is downstream and inaccessible.



\---



\## G3 — No Hotel‑Plane Access

The state machine must not:

\- enter hotel\_root  

\- enter any hotel‑plane coordinate  

\- reference hotel geometry  

\- modify hotel structure  



The hotel plane is reserved for runtime execution only.



\---



\## G4 — No World‑Plane Mutation

The state machine must not modify or write to:

\- coord\_world\_root  

\- coord\_hotel\_root  

\- coord\_tower  

\- coord\_field  

\- coord\_districts  

\- coord\_collapse  



World‑plane nodes are structural and immutable.



\---



\## G5 — coord\_collapse Is Diagnostic Only

The state machine must not:

\- enter coord\_collapse  

\- transition to coord\_collapse  

\- treat coord\_collapse as a state  

\- use coord\_collapse for failure handling  



coord\_collapse is a world‑plane diagnostic coordinate, not an execution target.



\---



\## G6 — No Spatial Drift

Execution must not move outside the service corridor.

Spatial drift includes:

\- entering any coordinate not explicitly part of the corridor  

\- invoking geometry outside preprocess → invariants → postprocess  

\- leaking state into runtime or world‑plane nodes  



Spatial drift is a structural violation and triggers S\_SAFEFAIL.



\---



\## G7 — Deterministic Geometry

The spatial path must be:

\- fixed  

\- linear  

\- deterministic  

\- invariant‑bound  



No dynamic routing or geometry‑dependent branching is allowed.



\---



\# Notes

\- Geometry rules are upstream of behavior.  

\- Geometry violations are detected in S\_INVARIANT\_CHECK.  

\- Any geometry violation triggers S\_SAFEFAIL → S\_ERASE.  

\- Geometry rules cannot be overridden by runtime logic.  



