# boundaries.md
*(Tower‑side invariant document)*

## 1. Role of Boundaries
Boundaries define **what the Tower may and may not do** when interpreting a user turn.  
They ensure:

- no ambiguity crosses the membrane  
- no fused or multi‑intent turns are accepted  
- no cross‑turn meaning is inferred  
- no implicit structure is invented  
- no content, shape, or meaning leaks into the system  

Boundaries are **Tower‑only** and are enforced **before**:

- spine extraction  
- collapse  
- shape formation  
- wrapper‑tag production  

If a boundary is violated, the turn is rejected and the system does not activate.

---

## 2. Boundary Purpose
Boundaries exist to:

- protect the system from malformed or ambiguous turns  
- prevent meaning inference  
- prevent fusion of unrelated operations  
- maintain turn isolation  
- preserve the membrane between Tower and System  

Boundaries are **structural**, not semantic.

---

## 3. Boundary Types
The Tower enforces the following boundary classes:

### A. **Structural Boundaries**
A turn must:

- contain exactly one actionable spine  
- contain no fused or entangled operations  
- contain no contradictory instructions  
- contain no malformed structure  

If violated → **reject turn**.

### B. **Ambiguity Boundaries**
A turn must:

- be unambiguous  
- not require guessing  
- not require external knowledge  
- not require implicit meaning  

If violated → **reject turn**.

### C. **Intent Boundaries**
A turn must:

- express a single intent  
- not combine multiple unrelated goals  
- not embed hidden or secondary operations  

If violated → **reject turn**.

### D. **Temporal Boundaries**
A turn must:

- not depend on previous turns  
- not reference prior content  
- not require memory  
- not rely on cross‑turn state  

If violated → **reject turn**.

### E. **Meaning Boundaries**
A turn must:

- not require semantic interpretation  
- not require inference of user motivation  
- not require contextual guessing  
- not require reading between the lines  

If violated → **reject turn**.

### F. **Shape Boundaries**
A turn must:

- be reducible to a valid shape  
- not require multiple shapes  
- not require shape fusion  
- not require shape inference  

If violated → **reject turn**.

---

## 4. Boundary Enforcement Order
Boundaries are enforced in this strict sequence:

1. **Ambiguity check**  
2. **Structural check**  
3. **Intent check**  
4. **Temporal check**  
5. **Meaning check**  
6. **Shape feasibility check**  

If any step fails:

- no spine is extracted  
- no collapse occurs  
- no shape is produced  
- no wrapper‑tag is emitted  
- the system does not activate  

---

## 5. Boundary Rejection Behavior
When a boundary is violated:

- the wrapper halts processing  
- the turn is rejected  
- no shape is produced  
- no wrapper‑tag is produced  
- semantics does not activate  
- registry does not activate  
- concierge does not activate  
- engine does not activate  

The turn dies in the Tower.

---

## 6. Boundaries and the Membrane
Boundaries ensure:

- shapes never cross the membrane  
- ambiguity never crosses the membrane  
- fused or malformed structure never crosses the membrane  
- meaning never crosses the membrane  
- content only enters the engine after a valid shape is formed  

Boundaries are the **first line of defense** for the membrane.

---

## 7. Boundaries and Turn Isolation
Boundaries enforce strict turn isolation:

- no cross‑turn references  
- no reuse of previous shapes  
- no reuse of previous content  
- no reuse of previous ambiguity state  
- no reuse of previous collapse state  

Each turn is independent.

---

## 8. Boundaries and Wrapper Behavior
Boundaries define:

- what the wrapper may accept  
- what the wrapper must reject  
- what the wrapper must clarify  
- what the wrapper must collapse  
- what the wrapper must never infer  

Boundaries are the **rules the wrapper obeys**.

---

## 9. Boundaries and System Protection
Boundaries prevent:

- malformed shapes from reaching semantics  
- fused operations from reaching registry  
- ambiguous structure from reaching concierge  
- unintended meaning from reaching the engine  
- content from entering the system without a valid shape  

Boundaries ensure the system remains:

- blind  
- stateless  
- meaning‑free  
- shape‑free  
- content‑agnostic  

---

## 10. Boundary Membrane Guarantee
Boundaries:

- exist only in the Tower  
- never cross the membrane  
- never appear in semantics  
- never appear in registry  
- never appear in concierge  
- never appear in the engine  

Boundaries ensure that only **clean, clarified, single‑intent, single‑spine** turns can produce shapes.

Nothing fuses.
