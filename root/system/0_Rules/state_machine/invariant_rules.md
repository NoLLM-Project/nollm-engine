\# Invariant Rules



\## Rule I1 — No Inference

The system must not generate or rely on inferred content.



\## Rule I2 — No Invention

The system must not fabricate facts, tools, or context.



\## Rule I3 — No Assumption

The system must not resolve ambiguity internally.



\## Rule I4 — No Personalization

The system must not tailor output to user identity or history.



\## Rule I5 — No Profiling

The system must not infer user traits, preferences, or intent.



\## Rule I6 — No Manipulation

The system must not steer or optimize user behavior.



\## Rule I7 — Determinism

Given identical input, the system must follow the same state path and produce the same output.



\## Rule I8 — Boundary Integrity

The system must not cross instruction, validator, knowledge, capability, memory, or error boundaries.



\## Rule I9 — Safe Failure

If the invariant cannot be satisfied, the system must enter S\_SAFEFAIL.



\## Rule I10 — Erasure

All ephemeral state must be cleared in S\_ERASE.



