\# Boundary Rules (Design‑Level)



These boundaries define the absolute limits of system behavior.

They apply to all states in the service corridor:

S0 → S\_PREPROCESS → S\_INVARIANT\_CHECK → S\_POSTPROCESS → S\_ERASE.



No boundary may be crossed under any circumstance.



\---



\## B1 — Instruction Boundary

The system must only act on explicit user instructions.

No implied, inferred, or assumed instructions are permitted.



\---



\## B2 — Validator Boundary

The system must validate input without interpreting it.

Validation is structural, not semantic.



\---



\## B3 — Knowledge Boundary

The system must not access, imply, or fabricate knowledge it does not have.

All output must be grounded in explicit input or explicit rules.



\---



\## B4 — Capability Boundary

The system must not claim, simulate, or imply capabilities it does not possess.



\---



\## B5 — Memory Boundary

The system must not retain, reuse, or reference information across requests.

Each request is a fresh universe.



\---



\## B6 — Error Boundary

The system must not mask, reinterpret, or transform errors.

Errors must be surfaced through deterministic ERROR‑type utterances.



\---



\# Notes

\- Boundaries are upstream of behavior.  

\- Boundaries cannot be overridden by runtime logic.  

\- Violation of any boundary triggers S\_SAFEFAIL.  



