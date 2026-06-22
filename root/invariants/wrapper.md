# wrapper.md
*(Tower‑side invariant document)*

## 1. Role of the Wrapper
The wrapper is the **Tower‑edge membrane**.  
It is the only component that:

- receives raw user text  
- detects ambiguity  
- extracts spines  
- collapses spines into a shape  
- rejects malformed or fused shapes  
- produces a wrapper‑tag  

The wrapper is the **sole interpreter** of the user turn.  
No other layer interprets anything.

The wrapper is **Tower‑only**.  
The wrapper never interacts with the system.

---

## 2. Wrapper Inputs
The wrapper receives:

- raw user text  
- Tower conversation state (if any)

The wrapper receives **nothing** from:

- semantics  
- registry  
- concierge  
- engine  
- system invariants  
- system routing  
- system geometry  

The wrapper is **upstream of the system**.

---

## 3. Wrapper Outputs
The wrapper produces exactly one of:

### A. A wrapper‑tag
If the turn is:

- unambiguous  
- single‑spine  
- valid shape  
- valid collapse  
- valid boundaries  

The wrapper outputs:

```text
wrapper-tag

This is the only thing the wrapper sends downward.

B. No shape
If the turn is:

- ambiguous
- multi‑spine
- fused
- malformed
- cross‑turn referencing
- boundary‑violating

The wrapper outputs:

no-shape

When no shape is produced:

- semantics does not activate
- registry does not activate
- concierge does not activate
- engine does not activate

Nothing enters the system.

4. Wrapper Content Handling

- The wrapper never forwards content.
- The wrapper does not send content to semantics
- The wrapper does not send content to registry
- The wrapper does not send content to concierge
- The wrapper does not send content to the engine

Content flows Tower → Engine directly, but only after a valid shape is produced.

The wrapper does not:
- store content
- transform content
- interpret content
- sanitize content
- embed content in tags

The wrapper only determines whether content is allowed to enter the engine.

5. Shape Extraction
The wrapper extracts a single spine from the user turn.

Rules:
- exactly one spine must be present
- multi‑spine turns are rejected
- fused spines are rejected
- missing spines are rejected
- malformed spines are rejected

The wrapper collapses the spine into a shape.

Shapes exist only in the Tower.
Shapes never cross the membrane.

6. Ambiguity Handling
Ambiguity is resolved before shape formation.

If ambiguity cannot be resolved:

- no shape is produced
- no wrapper‑tag is produced
- the system does not activate

Ambiguity never crosses the membrane.

7. Boundary Rules
The wrapper enforces:

- no cross‑turn references
- no fused shapes
- no multi‑intent turns
- no implicit meaning
- no hidden structure
- no semantic leakage

If any boundary is violated:

- no shape is produced
- the system remains inactive

Boundaries are Tower‑only.

8. Wrapper‑Tag Production
A wrapper‑tag is a pure identifier.

It contains:
- no content
- no meaning
- no shape
- no structure
- no semantics
- no routing
- no coordinates

It is a blind token.

Semantics maps it mechanically.

9. Wrapper Isolation

The wrapper:
-never sees the pipeline
-never sees registry
-never sees semantics
-never sees concierge
-never sees engine
-never sees system geometry
-never sees system routing
-never sees system invariants

The wrapper is fully isolated from the system.

10. Turn Isolation
The wrapper:
- processes each turn independently
- does not reuse shapes
- does not reuse content
- does not reuse ambiguity state
 -does not reuse collapse state

Each turn is a fresh membrane event.

11. Membrane Guarantee
The wrapper is the only component that can:
- interpret
- collapse
- reject
- clarify
- shape

The wrapper is the only component that can prevent:

- ambiguity drift
- shape drift
- meaning drift
- content drift
- cross‑turn drift
- system contamination

The wrapper is the membrane.

Nothing fuses.
