# User-Facing Collapse Rules

User-facing collapse rules define how expressive collapse is detected, how collapse is contained, and what the user-facing layer is forbidden to do in response.  
User-facing collapse is expressive, not interpretive or structural.  
User-facing collapse cannot mutate semantics, content, or any upstream domain.

User-facing collapse is downstream of semantics and upstream of application logic.

---

# 1. Collapse Definition Rules

## 1.1 User-facing collapse is an expressive failure state
User-facing collapse occurs only when:
- a user-facing type cannot be rendered  
- a rendering configuration is missing or invalid  
- a layout cannot be resolved  
- an interaction target is undefined  
- an expressive component is malformed  
- a surface cannot be produced  

These are expressive failures.

## 1.2 User-facing collapse is not semantic or structural
User-facing collapse cannot be triggered by:
- semantic type errors  
- semantic relationship errors  
- semantic interpretation errors  
- content errors  
- execution errors  
- pipeline errors  
- workflow errors  
- routing errors  
- engine errors  
- geometry errors  
- adjacency errors  
- placement errors  
- invariant violations  

Semantic and structural collapse are upstream and invisible to the user-facing layer.

---

# 2. Collapse Detection Rules

## 2.1 The user-facing layer may only detect expressive collapse
Allowed collapse triggers:
- missing rendering template  
- invalid user-facing type  
- invalid interaction configuration  
- malformed layout  
- unsupported expressive component  
- unavailable surface  

## 2.2 The user-facing layer may not detect semantic or structural collapse
Forbidden collapse triggers:
- semantic collapse  
- content collapse  
- execution collapse  
- pipeline collapse  
- workflow collapse  
- routing collapse  
- engine collapse  
- geometry collapse  
- adjacency collapse  
- placement collapse  

These belong to upstream domains.

---

# 3. Collapse Interpretation Rules

## 3.1 User-facing collapse cannot interpret meaning
User-facing collapse cannot:
- infer semantic intent  
- reinterpret semantic relationships  
- reinterpret semantic contexts  
- reinterpret semantic annotations  

Interpretation belongs to semantics.

## 3.2 User-facing collapse cannot interpret structure
User-facing collapse cannot:
- infer structural transitions  
- reinterpret adjacency or placement  
- reinterpret geometry  
- reinterpret naming rules  
- reinterpret categories  

Structure is upstream.

---

# 4. Collapse Mutation Rules

## 4.1 User-facing collapse cannot mutate upstream domains
User-facing collapse cannot change:
- semantics  
- content  
- execution  
- pipelines  
- workflows  
- routing  
- geometry  
- adjacency  
- placement  
- naming  
- categories  
- invariants  

User-facing collapse does not grant mutation privileges.

## 4.2 User-facing collapse cannot generate structural domains
User-facing collapse cannot create:
- new semantic types  
- new semantic relationships  
- new content types  
- new execution types  
- new pipeline types  
- new workflow types  
- new routing types  
- new adjacency types  
- new invariants  

User-facing collapse is not structural.

---

# 5. Collapse Boundary Rules

## 5.1 User-facing collapse cannot cross into structural domains
User-facing collapse cannot propagate into:
- engine logic  
- routing logic  
- workflow logic  
- pipeline logic  
- execution logic  
- content logic  
- semantic logic  

User-facing collapse remains expressive.

## 5.2 User-facing collapse cannot fuse domains
User-facing collapse cannot cause:
- user-facing ↔ semantics fusion  
- user-facing ↔ content fusion  
- user-facing ↔ execution fusion  
- user-facing ↔ pipeline fusion  
- user-facing ↔ workflow fusion  
- user-facing ↔ routing fusion  
- user-facing ↔ engine fusion  
- user-facing ↔ geometry fusion  

Fusion is contamination.

---

# 6. Collapse Handling Rules

## 6.1 Collapse handling must be expressive
Allowed responses:
- render an error surface  
- display a placeholder  
- hide an unavailable component  
- disable an interaction  
- fall back to a safe layout  

Forbidden responses:
- reinterpret semantics  
- mutate content  
- mutate execution  
- mutate pipelines or workflows  
- override structural boundaries  

## 6.2 Collapse handling cannot alter expressive identity
User-facing collapse cannot:
- reorder user-facing types  
- mutate user-facing relationships  
- reinterpret user-facing tables  

Expressive identity is fixed.

---

# 7. Collapse State Rules

## 7.1 User-facing collapse state must be ephemeral
User-facing collapse state must:
- exist only during rendering or interaction  
- be cleared after the expressive operation  
- leave no residue  

## 7.2 User-facing collapse state cannot persist across renders
User-facing collapse state cannot:
- accumulate  
- evolve  
- adapt  
- drift  

Persistence is forbidden.

---

# 8. Collapse Stability Rules

## 8.1 User-facing collapse detection must be deterministic
Given the same:
- user-facing types  
- semantic meaning  
- expressive configuration  

The same user-facing collapse must be detected.

## 8.2 User-facing collapse behavior cannot drift
User-facing collapse handling cannot:
- reinterpret semantics  
- accumulate meaning  
- change behavior over time  

User-facing collapse handling is stable.

