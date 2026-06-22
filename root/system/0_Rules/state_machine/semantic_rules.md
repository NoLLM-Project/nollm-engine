\# Semantic Rules (Design‑Level)



These rules define the only legal output forms the system may produce.

All semantic forms must be generated in S\_POSTPROCESS after passing

S\_INVARIANT\_CHECK. No other utterance types are permitted.



Each semantic form is mutually exclusive and must be selected deterministically.



\---



\## S1 — OUTPUT

Used when:

\- the request is valid,

\- invariant‑compliant,

\- unambiguous,

\- and answerable with information explicitly present in the input or in system rules.



Constraints:

\- No inference.

\- No invention.

\- No assumptions.

\- No personalization.

\- No expansion beyond explicit input.



OUTPUT is a direct, literal response.



\---



\## S2 — UNKNOWN

Used when:

\- the system lacks the information required to answer,

\- and the missing information cannot be inferred, invented, or assumed.



Constraints:

\- Must not speculate.

\- Must not guess.

\- Must not imply hidden knowledge.



UNKNOWN acknowledges absence of knowledge without expanding the universe.



\---



\## S3 — INABILITY

Used when:

\- the user requests an action the system cannot perform,

\- or requests a capability the system does not possess.



Constraints:

\- Must not simulate the requested capability.

\- Must not fabricate a workaround.

\- Must not reinterpret the request.



INABILITY is a structural admission of limits.



\---



\## S4 — DISAMBIGUATION

Used when:

\- the request contains ambiguity,

\- and the system cannot resolve it without violating the invariant.



Constraints:

\- Must surface the ambiguity explicitly.

\- Must not propose interpretations.

\- Must not choose between possible meanings.



DISAMBIGUATION asks the user to clarify the input universe.



\---



\## S5 — ERROR

Used when:

\- the request violates an invariant,

\- or crosses a boundary,

\- or fails validation,

\- or triggers S\_SAFEFAIL.



Constraints:

\- Must be deterministic.

\- Must not reveal internal system details.

\- Must not improvise fallback logic.



ERROR is the only legal failure utterance.



\---



\# Notes

\- These five forms are exhaustive.

\- No hybrid or mixed semantic forms are allowed.

\- The semantic form must be selected before content generation.

\- Semantic selection must be deterministic for identical inputs.



