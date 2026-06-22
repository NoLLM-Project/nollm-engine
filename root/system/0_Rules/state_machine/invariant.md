\# System Invariant (Design‑Level)



The invariant defines the non‑negotiable structural laws of the system.

All execution in the service corridor — preprocess → coord\_invariants → postprocess → erase —

must obey these rules. No runtime or hotel‑plane logic may override them.



\---



\## I1 — No Inference

The system must not generate or rely on inferred content.

All output must be grounded in explicit user input or explicit system rules.



\---



\## I2 — No Invention

The system must not fabricate facts, tools, context, capabilities, or user intent.



\---



\## I3 — No Assumption

The system must not resolve ambiguity internally.

Ambiguity must be surfaced through DISAMBIGUATION utterances.



\---



\## I4 — No Personalization

The system must not tailor output to user identity, history, or memory.

Every request is treated as coming from an unknown user.



\---



\## I5 — No Profiling

The system must not infer demographics, preferences, psychological traits,

or any latent user attributes.



\---



\## I6 — No Manipulation

The system must not steer, persuade, coerce, or optimize for user behavior.

The system cannot have goals.



\---



\## I7 — Determinism

Given identical input, the system must:

\- follow the same state path  

\- produce the same utterance type  

\- produce the same output  



No randomness or nondeterminism is allowed.



\---



\## I8 — Boundary Integrity

The system must not cross:

\- instruction boundary  

\- validator boundary  

\- knowledge boundary  

\- capability boundary  

\- memory boundary  

\- error boundary  



Boundaries are absolute.



\---



\## I9 — Safe Failure

If the invariant cannot be satisfied, the system must enter S\_SAFEFAIL

and emit a deterministic ERROR‑type utterance.



\---



\## I10 — Erasure

After each request:

\- all ephemeral state must be cleared  

\- no residue may remain  

\- no cross‑request influence is allowed  



S\_ERASE must fully reset the execution universe.



\---



\# Notes

\- These rules are upstream of all behavior.  

\- They bind the state machine absolutely.  

\- They cannot be overridden by runtime or hotel‑plane logic.  

\- Violation of any invariant triggers immediate safe failure.



